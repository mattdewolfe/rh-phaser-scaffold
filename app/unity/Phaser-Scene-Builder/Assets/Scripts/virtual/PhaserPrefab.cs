using UnityEngine;
using UnityEditor;
using System.Collections;

[ExecuteInEditMode]
public abstract class PhaserPrefab : MonoBehaviour {
	[HideInInspector]
	private static int[] S_TypeCounts;
	[HideInInspector]
	protected PhaserPrefabType _phaserType;

	[SerializeField][HideInInspector]
	protected string parent;
	[SerializeField][HideInInspector]
	protected string type;
	[SerializeField][HideInInspector]
	protected string name;
	[SerializeField][HideInInspector]
	protected Vector2 position;
	[SerializeField][HideInInspector]
	protected int angle;
	[SerializeField][HideInInspector]
	protected float alpha;
	[SerializeField][HideInInspector]
	protected Vector2 scale;
	[SerializeField][HideInInspector]
	protected Vector2 anchor;

	public bool assignToParent = false;

	public enum PhaserPrefabType {
		Null = 0,
		Group, 
		Sprite,
		Text, 
		TileSprite,
		Button,
		LabelledButton,
		MAX
	}

	public struct ImageInfo {
		public string key;
		public string frame;

		public string ToString() {
			return "Key: " + key +  ", Frame: " + frame;
		}
	}

	public virtual void Awake()
	{        
		if (_phaserType == PhaserPrefabType.Null)
		{
			_FirstPassFunction();
			RectTransform rect = GetComponent<RectTransform> ();
			Vector2 basePosition = GetBaseAnchors ();
			rect.anchorMin = basePosition;
			rect.anchorMax = basePosition;
			rect.pivot = GetBasePivot();
		}
	}

	protected abstract void _FirstPassFunction();
	public abstract void UpdateReferenceObject ();

	public virtual void UpdateSerializedFields() {
		parent = GetParent ();
		type = GetType ();
		name = GenerateName();
		position = GetPosition();
		angle = GetAngle ();
		scale = GetScale ();
		anchor = GetAnchor ();
		alpha = GetAlpha ();
	}

	public virtual string GetParent() {
		PhaserPrefab parentPref = transform.parent.GetComponent<PhaserPrefab> ();
		if (parentPref != null) {
			return parentPref.phaserName;
		}
		return "state";
	}

	public virtual Vector2 GetBaseAnchors() {
		return new Vector2 (0, 1);
	}

	public virtual Vector2 GetBasePivot() {
		return new Vector2 (0, 1);
	}

	private string GetType() {
		return _phaserType.ToString ().ToLower();
	}

	public virtual Vector2 GetScale() {
		return gameObject.transform.localScale;
	}

	public virtual Vector2 GetAnchor() {
		return new Vector2 (rect.anchorMin.x, 1 - rect.anchorMax.y);
	}

	public virtual int GetAngle() {
		return (int)gameObject.transform.eulerAngles.z * -1;
	}

	public virtual string GenerateName() {
		if (gameObject.name.Contains("GameObject")) {
			return GetType () + PhaserPrefab.S_GetTypeCount ((int)_phaserType).ToString();
		} else {
			return gameObject.name;
		}
	}

	public virtual Vector2 GetPosition() {	
		return new Vector2(rect.anchoredPosition.x, rect.anchoredPosition.y * -1.0f);
	}

	public virtual float GetAlpha() {
		return 1;
	}

	public string ColorToPhaserString(Color pColor) {
		string specifier = "#.0";
		return "rgba(" + pColor.r.ToString (specifier) + "," + pColor.g.ToString (specifier) + "," + pColor.b.ToString (specifier) + "," + pColor.a.ToString (specifier) + ")";
	}

	public string ColorToHEXString(Color pColor) {
		string hex = ColorUtility.ToHtmlStringRGBA (pColor);
		hex = hex.Substring (0, 6);
		return hex;
	}

	public int ColorToNumber(Color pColor) {
		float decColor = (((int)pColor.r/255) * 65536) + (((int)pColor.g/255) * 256) + ((int)pColor.b/255);
		return (int)decColor;
	}

	// Get/Set
	public PhaserPrefabType prefType {
		get {
			return _phaserType;
		}
	}

	public RectTransform rect {
		get {
			return transform as RectTransform;
		}
	}

	public string phaserName {
		get {
			return name;
		}
	}

	// Static Methods
	public static void S_ResetCounters() {
		PhaserPrefab.S_TypeCounts = new int[(int)PhaserPrefabType.MAX];
	}

	public static int S_GetTypeCount(int pIndex) {
		int result = 0;
		if (pIndex < PhaserPrefab.S_TypeCounts.Length) {
			result = PhaserPrefab.S_TypeCounts [pIndex];
			PhaserPrefab.S_TypeCounts [pIndex]++;
		}
		return result;
	}

	public static ImageInfo S_GetImageInfo(Object asset) {
		ImageInfo result;
		string assetPath = AssetDatabase.GetAssetPath (asset);
		string[] splitPath = assetPath.Split ('/');
		if (splitPath.Length > 1) {
			result.key = splitPath [splitPath.Length - 2];
			if (result.key == "static") {
				result.key = splitPath [splitPath.Length - 1].Split ('.') [0];
				result.frame = null;
			}
			else {
				result.frame = splitPath [splitPath.Length - 1].Split ('.') [0];
			}
		} else {
			result.key = splitPath [splitPath.Length - 1];
			result.frame = null;
		}
		return result;
	}
}

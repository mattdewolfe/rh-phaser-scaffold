using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEditor;

[ExecuteInEditMode]
public class PhaserSprite : PhaserPrefab {

	[SerializeField][HideInInspector]
	public int tint;
	[SerializeField][HideInInspector]
	public string key;
	[SerializeField][HideInInspector]
	public string frame;

	[HideInInspector]
	private Image _image;

	protected override void _FirstPassFunction ()
	{
		UpdateReferenceObject ();
	}

	public override void UpdateReferenceObject() {
		_phaserType = PhaserPrefabType.Sprite;
		_image = gameObject.GetComponent<Image> ();
		if (_image == null) {
			_image = gameObject.AddComponent (typeof(Image)) as Image;
		}
	}

	public override void UpdateSerializedFields() {
		base.UpdateSerializedFields ();
		if (_image == null) {
			_image = gameObject.AddComponent (typeof(Image)) as Image;
			if (_image == null) {
				_image = gameObject.AddComponent (typeof(Image)) as Image;
			}
		}
		ImageInfo iInfo = PhaserPrefab.S_GetImageInfo (_image.sprite);
		key = iInfo.key;
		frame = iInfo.frame;
		tint = ColorToNumber (_image.color);
	}

	public override float GetAlpha() {
		if (_image == null) {
			return 1;
		}
		return this._image.color.a;
	}
}

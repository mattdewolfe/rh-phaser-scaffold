using UnityEngine;
using System.Collections;

// Use this class to denote the creation of a group.
// All children of this GameObject will have this group set as
// their default group upon creation. If you do not use a group to create
// heirarcy, then the child prefabs will be tacked onto their parent prefab 
// with the standard addChild call in Phaser.
[ExecuteInEditMode]
public class PhaserGroup : PhaserPrefab {
	// Do you want the position of this group to be passed onto the export file?
	// If not, the group will be placed at (0,0). This often makes in game position changing easier to manage.
	public bool useEditorPosition = false;

	[HideInInspector]
	private CanvasGroup _canvas;

	protected override void _FirstPassFunction ()
	{
		UpdateReferenceObject ();
	}
		
	public override void UpdateReferenceObject() {
		_phaserType = PhaserPrefabType.Group;
		_canvas = gameObject.GetComponent<CanvasGroup> ();
		if (_canvas == null) {
			_canvas = gameObject.AddComponent (typeof(CanvasGroup)) as CanvasGroup;
		}
	}

	public override Vector2 GetPosition() {
		if (useEditorPosition) {
			return gameObject.transform.localScale;
		} else {
			return Vector2.zero;
		}
	}

	public override float GetAlpha() {
		if (_canvas != null) {
			return _canvas.alpha;
		}
		return 1;
	}
}

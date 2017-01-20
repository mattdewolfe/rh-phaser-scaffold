using UnityEngine;
using System.Collections;
using UnityEngine.UI;

[ExecuteInEditMode]
public class PhaserText : PhaserPrefab {

	[SerializeField][HideInInspector]
	public string copy;
	[SerializeField][HideInInspector]
	public int fontSize;
	[SerializeField][HideInInspector]
	public string fontColor;
	[SerializeField][HideInInspector]
	public string fontName;
	[SerializeField][HideInInspector]
	public string alignment;
	[SerializeField][HideInInspector]
	public int spacing;
	[SerializeField][HideInInspector]
	public int shadowX;
	[SerializeField][HideInInspector]
	public int shadowY;
	[SerializeField][HideInInspector]
	public string shadowColor;
	[SerializeField][HideInInspector]
	public int wrapWidth;
	[SerializeField]
	public string stroke;

	// This is the actual font name that will be passed into the export data.
	// This should match the const key you use in Phaser for the desired text.
	public string phaserFontKey;

	[HideInInspector]
	private Text _text;

	protected override void _FirstPassFunction ()
	{
		UpdateReferenceObject ();
	}

	public override void UpdateReferenceObject() {
		_phaserType = PhaserPrefabType.Text;
		_text = gameObject.GetComponent<Text> ();
		if (_text == null) {
			_text = gameObject.AddComponent (typeof(Text)) as Text;
			_text.text = "PhaserText";
			_text.alignment = TextAnchor.UpperLeft;
		}
	}

	public override void UpdateSerializedFields() {
		base.UpdateSerializedFields ();
		if (_text == null) {
			return;
		}
		copy = _text.text;
		fontSize = _text.fontSize;
		fontColor = ColorToHEXString (_text.color);
		fontName = phaserFontKey;
		spacing = (int)_text.lineSpacing;
		alignment = GetAlignment ();
		Shadow shadow = GetComponent<Shadow> ();
		if (shadow != null) {
			shadowX = (int)shadow.effectDistance.x;
			shadowY = -1 * (int)shadow.effectDistance.y;
			shadowColor = ColorToPhaserString (shadow.effectColor);
		} else {
			shadowColor = "";
		}

		if (_text.horizontalOverflow == HorizontalWrapMode.Wrap) {
			wrapWidth = (int)rect.rect.size.x;
		} else {
			wrapWidth = 0;
		}
	}

	public virtual string GetAlignment() {
		string align = "center";
		switch (_text.alignment) {
		case TextAnchor.LowerRight:
		case TextAnchor.MiddleRight:
		case TextAnchor.UpperRight:
			anchor.x = 1.0f;
			anchor.y = 0;
			align = "right";
			position.x += _text.rectTransform.rect.width;
			break;
		case TextAnchor.LowerLeft:
		case TextAnchor.MiddleLeft:
		case TextAnchor.UpperLeft:
			anchor.x = 0;
			anchor.y = 0;
			align = "left";
			break;
		default:
			anchor.x = 0.5f;
			anchor.y = 0.5f;
			position.x += _text.rectTransform.rect.width * 0.5f;
			break;
		}
		return align;
	}

	public override float GetAlpha() {
		if (_text != null) {
			return _text.color.a;
		}
		return 1;
	}
}

using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class PhaserButton : PhaserSprite {

	// If provided, this images will be passed along to be used as the individual button states in Phaser.
	// If a given image is not provided, the default 'out' image will be used for that state.
	public Sprite overFrameSprite;
	public Sprite downFrameSprite;
	public Sprite upFrameSprite;

	[SerializeField][HideInInspector]
	public string overFrame;
	[SerializeField][HideInInspector]
	public string downFrame;
	[SerializeField][HideInInspector]
	public string upFrame;

	protected override void _FirstPassFunction ()
	{
		UpdateReferenceObject ();
	}

	public override void UpdateSerializedFields() {
		base.UpdateSerializedFields ();
		_phaserType = PhaserPrefabType.Button;
		ImageInfo frameInfo;

		if (overFrameSprite == null) {
			overFrame = frame;
		} else {
			frameInfo = PhaserPrefab.S_GetImageInfo (overFrameSprite);
			overFrame = frameInfo.frame == null ? frameInfo.key : frameInfo.frame;
		}

		if (downFrameSprite == null) {
			downFrame = frame;
		} else {
			frameInfo = PhaserPrefab.S_GetImageInfo (downFrameSprite);
			downFrame = frameInfo.frame == null ? frameInfo.key : frameInfo.frame;
		}

		if (upFrameSprite == null) {
			upFrame = frame;
		} else {
			frameInfo = PhaserPrefab.S_GetImageInfo (upFrameSprite);
			upFrame = frameInfo.frame == null ? frameInfo.key : frameInfo.frame;
		}
	}

	public bool HasTextChild {
		get {
			return (GetComponentInChildren<PhaserText>() != null);
		}
	}
}

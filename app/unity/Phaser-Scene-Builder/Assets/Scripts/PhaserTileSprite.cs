using UnityEngine;
using System.Collections;
using UnityEngine.UI;

[ExecuteInEditMode]
public class PhaserTileSprite : PhaserSprite {

	protected override void _FirstPassFunction ()
	{
		UpdateReferenceObject ();
	}

	public override void UpdateReferenceObject ()
	{
		base.UpdateReferenceObject ();
		_phaserType = PhaserPrefabType.TileSprite;
	}
}

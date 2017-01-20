using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class PhaserLabelledButton : PhaserButton {
	
	public Color outLabelColor;
	public Color downLabelColor;
	public Color overLabelColor;
	public Color upLabelColor;

	protected override void _FirstPassFunction ()
	{
		base._FirstPassFunction ();
		if (outLabelColor == null)
			outLabelColor = Color.white;
		if (downLabelColor == null)
			downLabelColor = Color.white;
		if (overLabelColor == null)
			overLabelColor = Color.white;
		if (upLabelColor == null) 
			upLabelColor = Color.white;
		UpdateReferenceObject ();
	}

	public override void UpdateReferenceObject() {
		_phaserType = PhaserPrefabType.LabelledButton;
	}
}

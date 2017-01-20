using UnityEngine;
using System.Collections;
/// <summary>
///	This exists in order to mark the root element of our scene layout.
/// It is used by the export scripts to determine starting point for iteration, 
/// as well as the width/height of the scene you are building (if it is a complete scene build).
/// </summary>
public class PhaserRoot : MonoBehaviour {

	public RectTransform rect {
		get {
			return transform as RectTransform;
		}
	}

	public int gameWidth {
		get {
			return (int)rect.rect.width;
		}
	}

	public int gameHeight {
		get {
			return (int)rect.rect.height;
		}
	}

	public string sceneName {
		get {
			return gameObject.name.ToLower ();
		}
	}
}

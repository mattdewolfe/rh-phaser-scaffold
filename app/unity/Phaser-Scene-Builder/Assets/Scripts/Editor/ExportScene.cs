using UnityEngine;
using UnityEditor;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using UnityEngine.UI;
using System.IO;

public class ExportScene {

	public static string S_PROJET_DATA_FOLDER = "/../../../src/data/";
	[MenuItem ("Phaser/Export")]
	static void S_ExportSceneToJSON()
	{
		PhaserRoot root = SceneAsset.FindObjectOfType<PhaserRoot> ();
		if (root == null) {
			Debug.LogError("PhaserRoot object not found. Halting Export.");
		}
		PhaserPrefab.S_ResetCounters ();
		PhaserPrefab[] prefabs = root.transform.GetComponentsInChildren<PhaserPrefab> () as PhaserPrefab[];
		int gameWidth = root.gameWidth;
		int gameHeight = root.gameHeight;
		int i;
		int len = prefabs.Length;
		List<string> prefabData = new List<string>();
		Debug.Log ("Reading Prefab Data for " + len + " prefabs.");
		GameObject selectedAsset;
		for (i = 0; i < len; ++i)
		{
			PhaserPrefab prefab = prefabs [i] as PhaserPrefab;
			if (prefab != null)
			{
				prefabs [i].UpdateReferenceObject ();
				prefabs [i].UpdateSerializedFields ();
				prefabData.Add(JsonUtility.ToJson(prefabs[i]));
			}
		}
		S_WritePhaserJSON (root.sceneName, prefabData);
	}

	[MenuItem ("Phaser/Import")]
	static void S_ImportSceneFromJSON ()
	{
		
	}

	static void S_WritePhaserJSON(string sceneName, List<string>prefabs) 
	{
		string completeFile = "{";

		// Write the prefabs portion of the json file string.
		completeFile += "\"prefabs\":[";
		bool firstEntry = true;
		foreach (string entry in prefabs) {
			if (!firstEntry) {
				completeFile += ",";
			} else {
				firstEntry = false;
			}
			completeFile += entry;
		}
		completeFile += "]}";

		// Write the file to our phaser projects data folder folder.
		Debug.Log("Writing File: " + sceneName + ".json to Folder: " + Application.dataPath + ExportScene.S_PROJET_DATA_FOLDER);
		File.WriteAllText (Application.dataPath + ExportScene.S_PROJET_DATA_FOLDER + sceneName + ".json", completeFile);
	}

//	[MenuItem("Assets/Halt Conversion")]
//	public static void DeInit(BUNDLE_ACCESS_KEY bundleKey)
//	{
//		AssetDatabase.SaveAssets();
//		AssetDatabase.Refresh();
//		EditorUtility.UnloadUnusedAssetsImmediate();
//		LogAllMaterials(bundleKey);
//	}
//
//	public static bool SwapMaterial<T>(GameObject originalAsset, BUNDLE_ACCESS_KEY bundleKey) where T:Component
//	{
//		Debug.Log ("Begin Material swap on " + originalAsset.name);
//
//		if (originalAsset == null)
//		{
//			return false;
//		}
//
//		AssetDatabase.StartAssetEditing();
//		int dupesDestroyed = 0;
//
//		List<MeshRenderer> meshes = new List<MeshRenderer>();
//
//		if (originalAsset.GetComponent<MeshRenderer>() != null)
//		{
//			meshes.Add(originalAsset.GetComponent<MeshRenderer>());
//		}
//		//Special function because getComponentsInChildren doesn't work in Editor
//		RecursiveFindComponent<MeshRenderer>(originalAsset.transform, meshes);
//		MeshRenderer m_mesh;
//
//		T[] swappers;
//
//		// Process Mesh Renderers
//		int i = 0;
//		int j;
//		int len = meshes.Count;
//		int scriptCount;
//		int materialsLength;
//
//		Debug.Log ("Found " + len + " components to replace.");
//		for (i = 0; i < len; ++i)
//		{
//			m_mesh = meshes[i];
//
//			if (m_mesh.GetComponent<BundledGlobalMaterial>() != null)
//			{
//				Debug.Log ("Global Material found, skipping " + m_mesh.name);
//				continue;
//			}
//			swappers = m_mesh.gameObject.GetComponents<T>();
//			scriptCount = swappers.Length;
//			materialsLength = m_mesh.sharedMaterials.Length;
//			if (scriptCount > materialsLength)
//			{
//				for (j = materialsLength; j < scriptCount; ++j)
//				{
//					dupesDestroyed++;
//					GameObject.DestroyImmediate(swappers[j]);
//				}
//			}
//
//			for (int z = scriptCount; z < materialsLength; ++z)
//			{
//				if ( m_mesh.sharedMaterials[z] == null)
//				{
//					Debug.LogWarning(m_mesh.name + " Material Missing!");
//					continue;
//				}
//				string name = m_mesh.sharedMaterials[z].name.ToLower();
//				name = name.Split('(')[0];
//
//				if (name == "placeholder")
//					continue;
//
//				BundledMaterial newSwapper;
//				bool belongsToGlobal = false;
//				// Step over all assets names that belong to the global bundled and search for a match.
//				for (int w = 0; w < _assetsInGlobalBundle.Length; w++)
//				{
//					// If a match is found, swap that asset to a global material and break this loop.
//					if (name == _assetsInGlobalBundle[w])
//					{
//						Debug.Log ("Asset belongs to global, assigning");
//						belongsToGlobal = true;
//						break;
//					}
//				}
//				if (belongsToGlobal)
//				{
//					newSwapper = m_mesh.gameObject.AddComponent<BundledGlobalMaterial>() as BundledMaterial;
//					newSwapper.bundleKey = BUNDLE_ACCESS_KEY.GLOBAL_MATERIALS;
//				}
//				else
//				{
//					newSwapper = m_mesh.gameObject.AddComponent<T>() as BundledMaterial;
//					newSwapper.bundleKey = bundleKey;
//					AddEntryToList(name, bundleKey);
//				}
//				newSwapper.meshLayer = z;
//				newSwapper.assetName = name;
//			}
//			EditorUtility.SetDirty(m_mesh.gameObject);
//		}	
//
//		AssetDatabase.StopAssetEditing();
//		meshes.Clear();
//		meshes = null;
//		return true;
//	}
}

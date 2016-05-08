#pragma strict

import UnityEngine.SceneManagement;

function loadScene (i : int) {
	if (i == -1)
		Application.Quit();
	else
		SceneManager.LoadScene(i);
		//Application.LoadLevel(i);
}
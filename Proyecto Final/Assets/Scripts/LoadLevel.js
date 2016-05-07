#pragma strict

function loadScene (i : int) {
	if (i == -1)
		Application.Quit();
	else
		Application.LoadLevel(i);
}
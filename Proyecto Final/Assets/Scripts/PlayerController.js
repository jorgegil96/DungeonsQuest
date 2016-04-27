#pragma strict

import UnityEngine;
import System.Collections;

public var fVelocity :float;

private var rThisRigidbody : Rigidbody2D;
private var fAxis : float;

function Start()
{
	rThisRigidbody = GetComponent(Rigidbody2D);
}


function Update()
{
	fAxis =  Input.GetAxis("Horizontal");

	if(fAxis != 0.0f)
		rThisRigidbody.velocity = new Vector2 (fAxis * fVelocity, 0);
	else
	{
		fAxis = Input.GetAxis("Vertical");
		rThisRigidbody.velocity = new Vector2(0,fAxis * fVelocity);
	}
}
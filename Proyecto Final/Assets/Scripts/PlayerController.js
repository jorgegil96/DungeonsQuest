#pragma strict


public var fVelocity :float = 5.0f;


private var rThisRigidbody : Rigidbody2D;
private var fAxis : float;
private var sKeys = {};
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

function deleteKeyOfSetWithIdentifier(iKI : int)
{
	sKeys[iKI] = null;
}

function isKeyIdentifierInSetWithThisID(iKI : int)
{
	if(iKI in sKeys)
		return true;
	else
		return false;
}

function OnTriggerEnter2D(col : Collider2D)
{
	if(col.gameObject.tag == GameManager.sKeyTag)
	{
		sKeys[col.gameObject.GetComponent(Key).getKeyIdentifier()] = true;
	}
}
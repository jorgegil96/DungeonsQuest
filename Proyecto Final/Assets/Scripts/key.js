#pragma strict

public class Key extends MonoBehaviour
{
	public var iKeyIdentifier = -1;

	public function Key( iKI : int)
	{
		this.iKeyIdentifier = iKI;
	}

	public function getKeyIdentifier()
	{
		return this.iKeyIdentifier;
	}

}


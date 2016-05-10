var Num : int;
var Col : Collider2D;

function OnTriggerEnter2D (Other : Collider2D)
{

	if(Other.name == "Player"){
		Col.enabled=false;
		PuzzleOrden1.A[PuzzleOrden1.sig]=Num;
		PuzzleOrden1.sig=PuzzleOrden1.sig+1;
	}


}
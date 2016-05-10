import UnityEngine.Component;
static var A: int[]=[0,0,0,0,0];
static var sig: int=0;
static var B: boolean=false;
var Five : Collider2D;
var Four : Collider2D;
var Three : Collider2D;
var Two : Collider2D;
var One : Collider2D;
var col: Collider2D;
var spr: SpriteRenderer;

function Update () {
	//checa que el orden este correcto
	if(sig==5)
	{
		B=true;
		sig=0;
		for(i=1;i<=5 && B==true ;i++)
		{
			if(A[i-1]!=i)
			{	B=false;
			//sonido de mal
				for(j=0;j<5;j++)
				{
					A[j]=0;
				}
				One.enabled=true;
				Two.enabled=true;
				Three.enabled=true;
				Four.enabled=true;
				Five.enabled=true;
			}
		}

	}

	if(B)
	{
		col.enabled=true;
		spr.enabled=true;
		// haga aparecer el game object de llave

		B=false;

	}

}
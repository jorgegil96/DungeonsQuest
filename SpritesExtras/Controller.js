import UnityEngine;
import System.Collections;
import UnityEngine.Component;
/*********************************************/
var Pers : Rigidbody2D;
public var maxspeed : float;	
public var anim:  Animator;
static var  faceright: boolean;
static var  jumping: boolean=false;
static var  isdead: boolean=false;
public var  Salto: int;
private var move : float;

static var PASS : boolean=true; //para que ya no se escuchen los disparos anteriores
    //--
function Start () {
		 PASS=true;
		 maxspeed=2f;
		 Salto=200;
		 faceright=true;
		 isdead=false;
        anim.SetBool ("walk", false);//Walking animation is deactivated
        anim.SetBool ("dead", false);//Dying animation is deactivated
        anim.SetBool ("jump", false);//Jumping animation is deactivated
    }

function OnCollisionEnter2D(col: Collision2D) {
 if (col.gameObject.tag == "Enemy"){//################Important, the floor Tag must be "Ground" to detect the collision!!!!
			Vars.life--;
			if(Vars.life<=0)
			{
				isdead=true;
				SceneManager.LoadScene("GAMEOVER",LoadSceneMode.Single);
			}
        }
    if (col.gameObject.tag == "Piso"){//################Important, the floor Tag must be "Ground" to detect the collision!!!!
			jumping=false;
			anim.SetBool ("jump", false);
        }
    }
	
function Update () {

	if(!PlayervsWorld.cutscene){
         if(isdead){
         SceneManager.LoadScene("GAMEOVER",LoadSceneMode.Single);
          anim.SetBool ("dead", true);
        }
    if(isdead==false){
        //--DYING
        if(Input.GetKey ("k")){
         SceneManager.LoadScene("MENU",LoadSceneMode.Single);
        }
        //--END DYING
			
        //--JUMPING
        if (Input.GetButtonDown("Jump")){
            if(jumping==false){//only once time each jump
                Pers.AddForce(new Vector2(0f,Salto));
                jumping=true;
            anim.SetBool ("jump", true);
            }
        }
        //--END JUMPING
			
        //--WALKING
       move = Input.GetAxis ("Horizontal");
        Pers.velocity = new Vector2(move * maxspeed, Pers.velocity.y);
       if(move>0){//Go right
          
            anim.SetBool ("walk", true);//Walking animation is activated
            if(faceright==false){
                 
                Flip ();
            }
        }
        if(move==0){//Stop
           anim.SetBool ("walk", false);
        }			
        if((move<0)){//Go left
           anim.SetBool ("walk", true);
            if(faceright==true){
               
                Flip ();
            }
        }
        //END WALKING
    }
   }
}
	
function Flip(){
    faceright=!faceright;
    transform.localScale.x *= -1;
}


class PKS {
      constructor(height, width, x, y) {

          var canvas = document.getElementById("myCanvas");

          canvas.width = width;
          canvas.height = height;

          var ctx = canvas.getContext("2d");

          var z = width/(2*x);
          var u = height/(2*y);

          for(var i = 0; i <= x*2; i++){

            ctx.moveTo(z*i,height/2-10);
          ctx.lineTo(z*i,height/2+10);
          ctx.stroke();

          }

          for(var i = 0; i <= y*2; i++){

            ctx.moveTo(width/2-10,u*i);
          ctx.lineTo(width/2+10,u*i);
          ctx.stroke();

          }

        ctx.moveTo(0,height/2);
        ctx.lineTo(width,height/2);
        ctx.stroke();

        ctx.moveTo(width/2,0);
        ctx.lineTo(width/2,height);
        ctx.stroke();
        

        }

        nacrtajLiniju (x1, y1, x2, y2) {

          var canvas = document.getElementById("myCanvas");
          var ctx = canvas.getContext("2d");

          ctx.moveTo((x1*(b/(x*2)))+b/2,a/2-y1*(a/(y*2)));
        ctx.lineTo((x2*(b/(x*2)))+b/2,a/2-y2*(a/(y*2)));
        ctx.stroke();

        }

        nacrtajSpiralu(x3,y3,fip,fik){

          var canvas=document.getElementById("myCanvas");
          var ctx= canvas.getContext("2d");

          var centarX=b/2;
          var centarY=a/2;

          ctx.moveTo(centarX,centarY);

          var prom=(fik-fip)/500;
        var t=1;
        var z=1;
        var tocke = [];
        var tocke2= [];

        for(var i=0;i<=600;++i){

            var fi=fip+(i*prom);
            var r=Math.sqrt(fi);

          x3=centarX+(r*Math.cos(fi))*(b/(x*2));
            y3=centarY-(r*Math.sin(fi))*(a/(y*2));

            tocke.push({
              x: x3,
              y: y3
            });   
            }
            
            for(var i=0;i<=600;++i){

                    var fi=fip+(i*prom);
                    var r=Math.sqrt(fi);

                    x3=centarX-(r*Math.cos(fi))*(b/(x*2));
                    y3=centarY+(r*Math.sin(fi))*(a/(y*2));

                    tocke2.push({
                      x: x3,
                      y: y3
                    });
                  }   
          
          animate(tocke);
          animate2(tocke2);

          document.getElementById('start').addEventListener('click',function(){
            continueAnimating = true;
            animate();
            animate2();
          });

          function animate(){
            ctx.lineWidth = 2;
            ctx.strokeStyle = "blue";

              if(!continueAnimating){return;}
              if(t<tocke.length-1){ requestAnimationFrame(animate); }
              ctx.beginPath();
              ctx.moveTo(tocke[t-1].x,tocke[t-1].y);
              ctx.lineTo(tocke[t].x,tocke[t].y);
              ctx.stroke();

              t++;
          }
          

          function animate2(){

            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";

            if(!continueAnimating){return;}
              if(z<tocke2.length-1){ requestAnimationFrame(animate2); }

              ctx.beginPath();
              ctx.moveTo(tocke2[z-1].x,tocke2[z-1].y);
              ctx.lineTo(tocke2[z].x,tocke2[z].y);
              ctx.stroke();

              z++;
          }
          }
          nacrtajLeptira(x3,y3,tp,tk){

            var canvas=document.getElementById("myCanvas");
            var ctx= canvas.getContext("2d");
            var t=1;
            var centarX=b/2;
            var centarY=a/2;
            var pom=(tk-tp)/500;
            var tocke3=[];

            ctx.moveTo(centarX,centarY);
            ctx.beginPath();

            for(var i=0;i<500;i++){

              var pomak=tp+(i*pom);

              x3=(Math.pow(Math.E,Math.cos(pomak))-2*Math.cos(4*pomak)+Math.pow(Math.sin(pomak/12),5))*Math.sin(pomak)*(b/(x*2));
              y3=(Math.pow(Math.E,Math.cos(pomak))-2*Math.cos(4*pomak)+Math.pow(Math.sin(pomak/12),5))*Math.cos(pomak)*(a/(y*2));

              tocke3.push({x:x3,y:y3});
            }

            
            animate3(tocke3);

          document.getElementById('start').addEventListener('click',function(){
            continueAnimating = true;
            animate3(tocke3);
          });

          var kut = 0;
          function animate3(){
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";

            if(!continueAnimating){return;}
              if(t<tocke3.length-1){ requestAnimationFrame(animate3); }
              if(gumb){
                var tocka1 = matka.napraviMatricuTocke(tocke3[t-1].x, tocke3[t-1].y);
                var tocka2 = matka.napraviMatricuTocke(tocke3[t].x, tocke3[t].y);
                var t1nr = matka.rotiraj(tocka1, kut);
                var t2nr = matka.rotiraj(tocka2, kut);
                ctx.beginPath();
                ctx.moveTo(t1nr[0]+centarX,centarY - t1nr[1]);
                ctx.lineTo(t2nr[0]+centarX,centarY - t2nr[1]);
                ctx.stroke();
                kut += 0.002;

                
              } else {
              ctx.beginPath();
              ctx.moveTo(tocke3[t-1].x+centarX,centarY - tocke3[t-1].y);
              ctx.lineTo(tocke3[t].x+centarX,centarY - tocke3[t].y);
              ctx.stroke();
              }
              t++;
          }
          }



          nacrtajCvijet(x3,y3,fip,fik,cpoc,ckraj,cplus,mjestoX,mjestoY,boja){

            var canvas=document.getElementById("myCanvas");
            var ctx= canvas.getContext("2d");
            var centarX=b/2;
            var centarY=a/2;

            ctx.moveTo(mjestoX,mjestoY);
            
            var prom=(fik-fip)/200;
            

            for(var c=cpoc;c<ckraj;c+=cplus){

              ctx.beginPath();
              
              for(var i=0;i<200;i++){
                
                var fi=fip+(i*prom);
                var r=c*Math.cos(4*fi);
                
                x3=mjestoX+r*Math.cos(fi)*(b/(x*2));
                y3=mjestoY+r*Math.sin(fi)*(a/(y*2));
              
                ctx.lineTo(x3,y3);
                

            }
            ctx.strokeStyle=boja;
            ctx.stroke();
            ctx.closePath();
            
      }
  }
      nacrtajVrtuljak(){
          var canvas=document.getElementById("myCanvas");
            var ctx= canvas.getContext("2d");
            var centarX=b/2;
            var centarY=a/2;
            ctx.beginPath();
            ctx.strokeStyle='black';
            ctx.moveTo(centarX,centarY);
            ctx.lineTo(centarX-b/4,centarY-a/4);

            ctx.stroke();
            p.nacrtajCvijet(0,0,0,2*Math.PI,0.2,1.6,0.2,b/4,a/4,'black');
            ctx.beginPath();
            ctx.moveTo(centarX,centarY);
            ctx.lineTo(centarX+b/4,centarY-a/4);
            ctx.stroke();
            p.nacrtajCvijet(0,0,0,2*Math.PI,0.2,1.6,0.2,3*b/4,a/4,'black');
            ctx.beginPath();
            ctx.moveTo(centarX,centarY);
            ctx.lineTo(centarX,centarY+a/2);
            ctx.stroke();
            p.nacrtajCvijet(0,0,0,2*Math.PI,0.2,1.6,0.2,b/2,3*a/4,'black');

      }
}
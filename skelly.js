function Skelly(x,y)
{
    this.install = function(target)
    {
        this.element = document.createElement("img");
        this.element.setAttribute("src", "Skull.svg");
        //this.element.style.position = "fixed";
        this.element.style.left = x;
        this.element.style.top = y;
        this.element.style.width = "30px";
        this.element.style.padding = "10px";
        
        this.hp = 2;

        this.addMouseDown(this.element, this);
    
        main.appendChild(this.element);
    }
    
    this.addMouseDown = function(elem, obj)
    {
        elem.addEventListener("mousedown", function(){obj.mouseDown();}, false);
    }

    this.mouseDown = function()
    {
        
        this.element.style.opacity = .5;
        if (this.hp<=1) action.innerHTML = "You killed the Skelly";
        else
        {
            this.hp -= 1;
            action.innerHTML = "Attacked Skelly Hp:" + this.hp + "/2";
            player.php -= 1;
            player.Update();
        }
        
        
    }
    
    this.install(document.getElementById("main"));
}

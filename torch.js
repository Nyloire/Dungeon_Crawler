function Torch(x,y)
{
    //this.element = null;
    
    this.install = function(target)
    {
        this.element = document.createElement("img");
        this.element.setAttribute("src", "unlitTorch.svg");
        this.element.style.left = x;
        this.element.style.top = y;
        this.element.style.width = "20px";
        this.element.style.padding = "10px";
    
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
        info.innerHTML = "the room is damp and cool, you see your breath"
        action.innerHTML = "You light the torch";
        this.element.src = "drawing.svg"
    }
    this.install(document.getElementById("main"));
}


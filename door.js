function Door(x,y)
{
    this.install = function(target)
    {
        this.element = document.createElement("img");
        this.element.setAttribute("src", "Door.svg");
        this.element.style.left = x;
        this.element.style.top = y;
        this.element.style.width = "30px";
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
        //action.innerHTML = "The door is locked";
        room0 = new Room("water flows in streams across the floor", Skelly, Skelly, Door);
        this.element.removeChild(element);
    }
    
    
    this.install(document.getElementById("main"));
}
function Player()
{
    this.php = 10;
    
    this.element = document.createElement("div");
    
    this.Update = function()
    {
        this.element.innerHTML = "Hp: " + this.php + "/10";
    }
    
    this.Update();
    main.appendChild(this.element);
}
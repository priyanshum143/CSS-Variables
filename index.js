var colorInput = document.querySelector("#color-input");
colorInput.addEventListener("change", handleColorChange);

function handleColorChange()
{
	var newVal = this.value;
	document.querySelector("#image").style.backgroundColor = newVal;
	document.querySelector("#JS").style.color = newVal;
}

document.querySelectorAll(".input")[0].addEventListener("change", handleSpacingChange);
document.querySelectorAll(".input")[1].addEventListener("change", handleBlurChange);

function handleSpacingChange()
{
	var newVal = this.value;
	document.querySelector("#image").style.padding = this.value+"px";
}

function handleBlurChange()
{
	var newVal = this.value;
	document.querySelector("#image").style.filter = `blur(${newVal}px)`;
}

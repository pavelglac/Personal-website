		 var all = document.getElementsByTagName("*");

		for (var i=0, max=all.length; i < max; i++)
		{
			element =  all[i]
			if (element.hasChildNodes())
			{

				element =  all[i].childNodes[0];

			}
			
			if (all[i].tagName === "SCRIPT" || all[i].tagName === "NOSCRIPT" || all[i].tagName === "STYLE" || element.tagName === "HEAD" || all[i].parentElement.tagName === "HEAD" || element.textContent.trim() === ""){continue;}
			//element.textContent = "Ahoj";
			console.log(element.textContent);


		}
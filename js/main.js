var scrollTo=function(t,e){var o=document.scrollingElement||document.documentElement,n=o.scrollTop,c=t-n,r=+new Date,l=function(){var i,s,a,g=+new Date-r;o.scrollTop=parseInt((i=g,s=n,a=c,(i/=e/2)<1?a/2*i*i+s:-a/2*(--i*(i-2)-1)+s)),g<e?requestAnimationFrame(l):o.scrollTop=t};l()};document.getElementById("arrow").onclick=function(){scrollTo(window.innerHeight,1250)}
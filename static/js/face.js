function import$(t,s){var r={}.hasOwnProperty;for(var i in s)r.call(s,i)&&(t[i]=s[i]);return t}Voronoi.face=function(t,s,r){var i,n,e,u,h,o,a,x,p,c,f,v=this;for(null==r&&(r=!1),this.convex=t,this.idx=s,this.active=r,this.removed=!1,this.pts=s.map(function(s){return t.pts[s]}),this.norm=Aux.cross(Aux.sub(this.pts[2],this.pts[0]),Aux.sub(this.pts[1],this.pts[0])),i=["x","y","z"].reduce(function(t,s){return t+Math.pow(v.norm[s],2)},0),this.norm={x:this.norm.x/i,y:this.norm.y/i,z:this.norm.z/i},this.front=function(t){return Aux.inner(this.norm,Aux.sub(t,this.pts[0]))>0},n=Aux.inner(this.norm,Aux.sub(t.center,this.pts[0])),n>0?(["x","y","z"].forEach(function(t){return v.norm[t]=-v.norm[t]}),this.pts.reverse(),s.reverse()):0===n&&(this.trivial=!0),e=[],u=0;3>u;++u)h=u,o=(h+1)%3,a=s[h]>s[o]?[s[o],s[h]]:[s[h],s[o]],x=a[0],p=a[1],e.push((a=(c=((f=t.edges)[x]||(f[x]={}))[p])?c:((f=t.edges)[x]||(f[x]={}))[p]=[x,p],a.ref=0,a));return this.edges=e,this},import$(Voronoi.face.prototype,{getCenter:function(){var t,s,r;return t=[{x:0,y:0},this.pts.length],s=t[0],r=t[1],this.pts.forEach(function(t){var r;return r=[s.x+t.x,s.y+t.y],s.x=r[0],s.y=r[1],r}),s.x=s.x/r,s.y=s.y/r,s.z=-100,s},dual:function(){var t,s,r,i,n,e,u,h,o,a,x,p,c,f,v,y,l;return this.dual.value&&this.dual.value,t=this.pts[0],s=t.x,r=t.y,i=t.z,t=this.pts[1],n=t.x,e=t.y,u=t.z,t=this.pts[2],h=t.x,o=t.y,a=t.z,x=r*(u-a)+e*(a-i)+o*(i-u),p=i*(n-h)+u*(h-s)+a*(s-n),c=s*(e-o)+n*(o-r)+h*(r-e),f=s*(e*a-o*u)+n*(o*i-r*a)+h*(r*u-e*i),v=.5*-x/c,y=.5*-p/c,l=-f/c,this.dual.value={x:v,y:y,z:l},this.dual.value}});
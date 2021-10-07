(function(){
    var cookie = function(namecookie) {
        if(!(this instanceof cookie)){
            return new cookie(namecookie);
        }
        
        this.myArg22 = namecookie;
    }
    cookie.fn = cookie.prototype = { 
        get: function(){
            var cookies = document.cookie;
            var prefix = this.myArg22 + "=";
            var begin = cookies.indexOf("; " + prefix);
 
            if (begin == -1) {
 
                begin = cookies.indexOf(prefix);
         
                if (begin != 0) {
                    return null;
                }
 
            } else {
                begin += 2;
            }
 
            var end = cookies.indexOf(";", begin);
     
            if (end == -1) {
                end = cookies.length;                        
            }
 
            return unescape(cookies.substring(begin + prefix.length, end));
        },
        set: function(valor){
            document.cookie= this.myArg22 + "=" + valor;
        },
        del: function(){
                document.cookie = this.myArg22 + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        }
    }
    window.cookie = cookie;
})();
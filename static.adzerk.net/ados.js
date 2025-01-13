// Generated by CoffeeScript 1.12.0
(function() {
  var JSON;if(!JSON){JSON={}}(function(){'use strict';function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify')}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse')}}}());;
  var P, Req, e, impressionData, logData, passbackData, passbackLoadData, passbackNextData, passbackTimeoutData, placementData, requestData, root, zerkEvent,
    slice = [].slice,
    hasProp = {}.hasOwnProperty;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.zerk_base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    decode: function(e) {
      var a, f, i, n, o, r, s, t, u;
      t = "";
      n = void 0;
      r = void 0;
      i = void 0;
      s = void 0;
      o = void 0;
      u = void 0;
      a = void 0;
      f = 0;
      e = e.replace(/[^A-Za-z0-9\-_\=]/g, "");
      while (f < e.length) {
        s = this._keyStr.indexOf(e.charAt(f++));
        o = this._keyStr.indexOf(e.charAt(f++));
        u = this._keyStr.indexOf(e.charAt(f++));
        a = this._keyStr.indexOf(e.charAt(f++));
        n = s << 2 | o >> 4;
        r = (o & 15) << 4 | u >> 2;
        i = (u & 3) << 6 | a;
        t = t + String.fromCharCode(n);
        if (u !== 64) {
          t = t + String.fromCharCode(r);
        }
        if (a !== 64) {
          t = t + String.fromCharCode(i);
        }
      }
      t = zerk_base64._utf8_decode(t);
      return t.replace(/\0/g, '');
    },
    _utf8_decode: function(e) {
      var c1, c2, c3, n, r, t;
      t = "";
      n = 0;
      r = c1 = c2 = 0;
      while (n < e.length) {
        r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
          n++;
        } else if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += String.fromCharCode((r & 31) << 6 | c2 & 63);
          n += 2;
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          n += 3;
        }
      }
      return t;
    }
  };

  root.zerk_generateUUID = function() {
    var d, uuid;
    d = new Date().getTime();
    uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r;
      r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
  };

  root.zerk_getQueryVariable = function(url, variable) {
    var i, pair, query, vars;
    query = url.split("?")[1];
    vars = query.split("&");
    i = 0;
    while (i < vars.length) {
      pair = vars[i].split("=");
      if (pair[0] === variable) {
        return pair[1];
      }
      i++;
    }
    return false;
  };

  root.adosRun = function() {
    while (window.ados.run !== void 0 && window.ados.run.length > 0) {
      window.ados.run[0].call();
      ados.run.splice(0, 1);
    }
    return window.ados.run.push = function(code) {
      return code.call();
    };
  };

  root.cssLoad = function(css) {
    var s, stylenode;
    s = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(s);
    if (!!window.ActiveXObject) {
      return document.styleSheets[document.styleSheets.length - 1].cssText = css;
    } else {
      stylenode = document.createTextNode(css);
      return s.appendChild(stylenode);
    }
  };

  root.cssLinkLoad = function(url) {
    var tag;
    tag = document.createElement('link');
    tag.rel = 'stylesheet';
    tag.href = url;
    return document.getElementsByTagName('head')[0].appendChild(tag);
  };

  root.azHtmlLoad = function(div, content) {
    var adzerkDiv;
    adzerkDiv = document.getElementById(div);
    return adzerkDiv.innerHTML = content;
  };

  root.azScriptSRCLoad = function(div, script) {
    var adzerkDiv, newScript;
    newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = script;
    adzerkDiv = document.getElementById(div);
    return adzerkDiv.appendChild(newScript);
  };

  root.azScriptExtensionLoad = function(url) {
    var head, newScript;
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = url;
    head = document.getElementsByTagName('head')[0];
    return head.appendChild(newScript);
  };

  root.azRegisterExtension = function(name, func) {
    var args, j, len1, ref;
    if (root.ados.extensions == null) {
      root.ados.extensions = {};
    }
    root.ados.extensions[name] = func;
    if ((root.ados.extensionCalls != null) && (root.ados.extensionCalls[name] != null)) {
      ref = root.ados.extensionCalls[name];
      for (j = 0, len1 = ref.length; j < len1; j++) {
        args = ref[j];
        func.apply(root, args);
      }
      return delete root.ados.extensionCalls[name];
    }
  };

  root.azInitExtension = function() {
    var args, name;
    name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if ((root.ados.extensions != null) && (root.ados.extensions[name] != null)) {
      return root.ados.extensions[name].apply(root, args);
    } else {
      if (root.ados.extensionCalls == null) {
        root.ados.extensionCalls = {};
      }
      if (root.ados.extensionCalls[name] == null) {
        root.ados.extensionCalls[name] = [];
      }
      return root.ados.extensionCalls[name].push(args);
    }
  };

  root.ados_async_load = function(src) {
    var s, z;
    z = document.createElement("script");
    z.type = "text/javascript";
    z.async = true;
    z.src = src;
    s = document.getElementsByTagName("script")[0];
    return s.parentNode.insertBefore(z, s);
  };

  root.azScriptInlineLoad = function(div, script, interval) {
    var adzerkDiv, newScript;
    newScript = document.createElement("script");
    newScript.type = "text/javascript";
    if (/msie/.test(navigator.userAgent.toLowerCase())) {
      newScript.text = script;
    } else {
      newScript.innerHTML = script;
    }
    adzerkDiv = document.getElementById(div);
    return adzerkDiv.appendChild(newScript);
  };

  root.azLoad = function(div, code) {
    var adzerkDiv;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv) {
      return code();
    } else {
      return setTimeout((function() {
        return azLoad(div, code);
      }), 100);
    }
  };

  root.zshow = function(div) {
    if (zItems[div]) {
      return document.write(zItems[div]);
    }
  };

  root.ados_addInlinePlacement = function(accountId, siteId, size) {
    var chars, i, ran, randomName;
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    randomName = "";
    i = 0;
    while (i < 12) {
      ran = Math.floor(Math.random() * chars.length);
      randomName += chars.substring(ran, ran + 1);
      i++;
    }
    return ados_addPlacement(accountId, siteId, randomName, size);
  };

  root.ados_add_placement = function(accountId, siteId, name, size) {
    return ados_addPlacement(accountId, siteId, name, size);
  };

  root.ados_addPlacement = function(accountId, siteId, name, size) {
    var placement;
    placement = new P();
    placement.A = accountId;
    placement.S = siteId;
    placement.D = name;
    if (!isNaN(size)) {
      placement.AT = size;
    } else {
      placement.ATA = size;
    }
    ados_addPlacementObject(placement);
    return placement;
  };

  root.ados_loadDiv = function(name) {
    if (!window.ados.isAsync) {
      return zshow(name);
    }
  };

  root.ados_setIp = function(ip) {
    return window.ados.ipOverride = String(ip);
  };

  root.ados_setIP = root.ados_setIp;

  root.ados_setUserAgent = function(ua) {
    return window.ados.userAgentOverride = String(ua);
  };

  root.ados_setUser = function(userKey) {
    return window.ados.userKeyOverride = String(userKey);
  };

  root.ados_setConsent = function(consent) {
    return window.ados.consent = consent;
  };

  root.ados_setKeywords = function(keywords) {
    var keywordCookie;
    keywordCookie = (' ' + document.cookie).match(new RegExp('[; ]ados_keyword_cookie=([^\\s;]*)'));
    if (!!keywordCookie) {
      return window.ados.keywords = unescape(keywordCookie[1]) + ',' + keywords;
    } else {
      return window.ados.keywords = keywords;
    }
  };

  root.ados_setProperties = function(properties) {
    if (properties == null) {
      properties = {};
    }
    return window.ados.properties = properties;
  };

  root.ados_setKeywordCookie = function(keywords) {
    var domain, expires;
    expires = new Date();
    domain = window.ados.domain || ".adzerk.net";
    expires.setTime(new Date().getTime() + 3600000 * 24 * 30);
    return document.cookie = 'ados_keyword_cookie=' + escape(keywords) + ';expires=' + expires.toGMTString() + 'domain=' + domain + ';path=\/;';
  };

  root.ados_setNoTrack = function() {
    return window.ados.isNoTrack = true;
  };

  root.ados_setDomain = function(domain) {
    return window.ados.domain = domain;
  };

  root.ados_setLatitude = function(latitude) {
    return window.ados.intendedLatitude = String(latitude);
  };

  root.ados_setLongitude = function(longitude) {
    return window.ados.intendedLongitude = String(longitude);
  };

  root.ados_setRadius = function(radius) {
    return window.ados.radius = String(radius);
  };

  root.ados_loadTags = function(baseUrl, divId, timeout, props) {
    if (timeout == null) {
      timeout = 500;
    }
    if (props == null) {
      props = {};
    }
    return window.ados.tagManagerConfig = {
      baseUrl: baseUrl,
      divId: divId,
      timeout: timeout,
      props: props
    };
  };

  root.ados_setWriteResults = function() {
    return window.ados.writeResults = true;
  };

  root.ados_setPassbackTimeout = function(timeout) {
    ados_log('setting timeout' + timeout);
    return window.ados.passbackTimeout = timeout;
  };

  root.ados_setAccessibility = function(options) {
    return window.ados.accessibility = options;
  };

  root.ados_log = function(text) {
    window.ados.fire('log', new logData(text));
    if (window.console) {
      return console.info(new Date().getTime() + ': ' + text);
    }
  };

  root.ados_addPlacementObject = function(placement) {
    if (!window.ados.placements) {
      window.ados.placements = new Array();
    }
    return window.ados.placements.push(placement);
  };

  root.ados_refresh = function(placement, seconds, again) {
    var div;
    ados_log('triggering refresh of:' + placement.D);
    ados.fire('refresh', null);
    window.ados.passbacks = {};
    div = document.getElementById(placement.D);
    while (div.hasChildNodes()) {
      div.removeChild(div.lastChild);
    }
    ados_addPlacementObject(placement);
    ados_load();
    if (again) {
      return setTimeout((function() {
        return ados_refresh(placement, seconds, true);
      }), seconds * 1000);
    }
  };

  root.ados_loadResults = function(results) {
    var i, len, results1;
    len = results.length;
    i = 0;
    results1 = [];
    while (i < len) {
      adosResults[results[i].divName] = results[i];
      eval(results[i].adCode);
      results1.push(i++);
    }
    return results1;
  };

  Req = function() {
    this.Placements = window.ados.placements;
    window.ados.placements = new Array();
    if (window.ados.ipOverride != null) {
      this.IpOverride = encodeURIComponent(ados.ipOverride);
    }
    if (window.ados.userKeyOverride != null) {
      this.UserKeyOverride = encodeURIComponent(ados.userKeyOverride);
    }
    if (window.ados.userAgentOverride != null) {
      this.UserAgentOverride = encodeURIComponent(ados.userAgentOverride);
    }
    if (window.ados.consent != null) {
      this.Consent = window.ados.consent;
    }
    if (window.ados.intendedLatitude != null) {
      this.intendedLatitude = window.ados.intendedLatitude;
    }
    if (window.ados.intendedLongitude != null) {
      this.intendedLongitude = window.ados.intendedLongitude;
    }
    if (window.ados.radius != null) {
      this.radius = window.ados.radius;
    }
    if (window.ados.includeMatchedPoints != null) {
      this.includeMatchedPoints = window.ados.includeMatchedPoints;
    }
    this.Keywords = encodeURIComponent(ados.keywords);
    this.Referrer = encodeURIComponent(document.referrer);
    this.IsAsync = window.ados.isAsync;
    this.IsNoTrack = window.ados.isNoTrack;
    this.WriteInline = window.ados.writeInline;
    this.WriteResults = window.ados.writeResults;
    return this;
  };

  placementData = function(placement) {
    var a, j, len1, ref;
    this.accountId = placement.A;
    this.siteId = placement.S;
    this.name = placement.D;
    if (placement.Z) {
      this.zoneId = placement.Z;
    }
    if (placement.CampaignId) {
      this.campaignId = placement.CampaignId;
    }
    if (placement.FlightId) {
      this.flightId = placement.FlightId;
    }
    if (placement.FlightCreativeId) {
      this.adId = placement.FlightCreativeId;
    }
    if (placement.Properties) {
      this.properties = placement.Properties;
    }
    if (placement.Overrides) {
      this.overrides = placement.Overrides;
    }
    this.sizes = [];
    if (placement.AT) {
      this.sizes.push(placement.AT);
    }
    if (placement.ATA) {
      ref = placement.ATA;
      for (j = 0, len1 = ref.length; j < len1; j++) {
        a = ref[j];
        this.sizes.push(a);
      }
    }
    return this;
  };

  requestData = function(req) {
    var j, len1, p, ref;
    this.placements = [];
    ref = req.Placements;
    for (j = 0, len1 = ref.length; j < len1; j++) {
      p = ref[j];
      this.placements.push(new placementData(p));
    }
    if (req.IpOverride != null) {
      this.ipOverride = req.IpOverride;
    }
    if (req.UserKeyOverride != null) {
      this.userKeyOverride = req.UserKeyOverride;
    }
    if (req.UserAgentOverride != null) {
      this.userAgentOverride = req.UserAgentOverride;
    }
    if (req.Consent != null) {
      this.consent = req.Consent;
    }
    if (req.intendedLatitude != null) {
      this.intendedLatitude = req.intendedLatitude;
    }
    if (req.intendedLongitude != null) {
      this.intendedLongitude = req.intendedLongitude;
    }
    if (req.radius != null) {
      this.radius = req.radius;
    }
    if (req.includeMatchedPoints != null) {
      this.includeMatchedPoints = req.includeMatchedPoints;
    }
    if (req.Keywords) {
      this.keywords = req.Keywords;
    }
    if (req.Referrer) {
      this.referrer = req.Referrer;
    }
    return this;
  };

  logData = function(message) {
    this.message = message;
    return this;
  };

  passbackData = function(div, passback) {
    this.flightId = passback.FlightId;
    this.veriPixel = passback.VeriPixel;
    this.script = passback.Script;
    this.div = div;
    return this;
  };

  passbackLoadData = function(div, passbacks) {
    var j, len1, p;
    this.passbacks = [];
    for (j = 0, len1 = passbacks.length; j < len1; j++) {
      p = passbacks[j];
      this.passbacks.push(new passbackData(div, p));
    }
    return this;
  };

  passbackNextData = function(div, flightId, nextFlightId) {
    this.div = div;
    this.flightId = flightId;
    this.nextFlightId = nextFlightId;
    return this;
  };

  passbackTimeoutData = function(div, flightId) {
    this.div = div;
    return this.flightId = flightId;
  };

  impressionData = function(div, url) {
    var shim;
    this.div = div;
    this.veriPixel = url;
    shim = zerk_getQueryVariable(url, "e");
    this.e = shim;
    this.shim = JSON.parse(zerk_base64.decode(shim));
    return this;
  };

  zerkEvent = function(e, args) {
    this.name = e;
    this.sessionId = window.ados.sessionId;
    if (args) {
      this.data = args;
    }
    return this;
  };

  P = function() {
    return {
      setZone: function() {
        var zoneids;
        zoneids = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        this.Z = zoneids;
        return this;
      },
      setClickUrl: function(clickurl) {
        this.ClickUrl = encodeURIComponent(clickurl);
        return this;
      },
      setRedirectUrl: function(redirectUrl) {
        this.RedirectUrl = encodeURIComponent(redirectUrl);
        return this;
      },
      setCampaignId: function(campaignId) {
        this.CampaignId = campaignId;
        return this;
      },
      setFlightId: function(flightId) {
        this.FlightId = flightId;
        return this;
      },
      setFlightCreativeId: function(flightCreativeId) {
        this.FlightCreativeId = flightCreativeId;
        return this;
      },
      setProperty: function(key, value) {
        if (this.Properties == null) {
          this.Properties = {};
        }
        this.Properties[key] = value;
        return this;
      },
      setProperties: function(dict) {
        var key, value;
        if (this.Properties == null) {
          this.Properties = {};
        }
        for (key in dict) {
          if (!hasProp.call(dict, key)) continue;
          value = dict[key];
          this.Properties[key] = value;
        }
        return this;
      },
      setContentKeys: function(dict) {
        var key, value;
        if (this.ContentKeys == null) {
          this.ContentKeys = {};
        }
        for (key in dict) {
          if (!hasProp.call(dict, key)) continue;
          value = dict[key];
          this.ContentKeys[key] = value;
        }
        return this;
      },
      enableDynamicSiteSelection: function() {
        this.DynamicSiteOverride = document.domain.replace(/^www\./, '');
        return this;
      },
      setRefresh: function(seconds, again) {
        var placement;
        if (seconds == null) {
          seconds = 10;
        }
        if (again == null) {
          again = true;
        }
        if (isNaN(seconds) || seconds < 1) {
          seconds = 10;
        }
        placement = this;
        setTimeout((function() {
          return ados_refresh(placement, seconds, again);
        }), seconds * 1000);
        return this;
      },
      loadInline: function() {
        ados.isAsync = false;
        ados.writeInline = true;
        window.divName = this.D;
        ados_load(this.D);
        return this;
      },
      setOverrides: function(overrides) {
        this.Overrides = overrides;
        return this;
      }
    };
  };

  root.ados_load = function(loadDiv) {
    var data, domain, esreq, gen_domain, k, keywordCookie, loadTags, properties, proto, prototype_toJSON, req, src, timestamp, v;
    gen_domain = function() {
      var id;
      id = ((window.ados.placements || [])[0] || {}).A;
      if (!id) {
        return;
      }
      if (id === 9706) {
        return "engine.adzerk.net";
      } else {
        return "e-" + id + ".adzerk.net";
      }
    };
    domain = window.ados.domain || gen_domain();
    if (!domain) {
      ados_log('Could not generate an engine domain. An ados placement with a Network Id is required.');
      ados_log('Cancelling ados_load() due to missing engine domain.');
      return;
    }
    if (ados.isAsync !== false) {
      window.ados.isAsync = true;
    }
    keywordCookie = (' ' + document.cookie).match(new RegExp('[; ]ados_keyword_cookie=([^\\s;]*)'));
    if (!!keywordCookie) {
      window.ados.keywords = unescape(keywordCookie[1]);
    }
    proto = "http";
    if (document.location.protocol === "index.html") {
      proto = "https";
    }
    timestamp = new Date().getTime();
    properties = ((function() {
      var ref, results1;
      ref = window.ados.properties || {};
      results1 = [];
      for (k in ref) {
        v = ref[k];
        results1.push("&" + (encodeURIComponent("property:" + k)) + "=" + (encodeURIComponent(v)));
      }
      return results1;
    })()).join('');
    src = proto + "://" + domain + "/ados?t=" + timestamp + properties + "&request=";
    req = new Req();
    data = new requestData(req);
    ados.fire('requestStart', data);
    prototype_toJSON = (window.Prototype ? Array.prototype.toJSON : null);
    if (prototype_toJSON) {
      delete Array.prototype.toJSON;
    }
    loadTags = function(callback) {
      var baseUrl, div, divId, e, msg, onTagsLoaded, props, ref, ref1, tagsFrame, timeout;
      ref = ados.tagManagerConfig || {}, baseUrl = ref.baseUrl, divId = ref.divId, timeout = ref.timeout, props = ref.props;
      if (baseUrl && divId) {
        div = document.getElementById(divId);
        msg = 'AdzerkTagManager:complete';
        props = JSON.stringify(props);
      }
      if (!div) {
        return callback();
      }
      onTagsLoaded = (function(called) {
        return function(event) {
          if ((!event || event.data === msg) && !called++) {
            return callback();
          }
        };
      })(0);
      tagsFrame = document.createElement("iframe");
      tagsFrame.src = baseUrl + "#p=" + (encodeURIComponent(props));
      tagsFrame.style = "display:none,visibility:hidden";
      tagsFrame.height = 0;
      tagsFrame.width = 0;
      tagsFrame.marginheight = 0;
      tagsFrame.marginwidth = 0;
      tagsFrame.frameBorder = 0;
      tagsFrame.scrolling = "no";
      tagsFrame.noresize = "noresize";
      try {
        ((ref1 = window.attachEvent) != null ? ref1 : window.addEventListener)("message", onTagsLoaded, false);
        setTimeout(onTagsLoaded, timeout);
        return div.appendChild(tagsFrame);
      } catch (error) {
        e = error;
        return onTagsLoaded();
      }
    };
    if (req.Placements.length !== 0) {
      esreq = encodeURIComponent(JSON.stringify(req));
      if (window.ados.isAsync) {
        loadTags(function() {
          return ados_async_load("" + src + esreq);
        });
      } else {
        document.write("<script type=\"text/javascript\" src=\"" + src + esreq + "\"></script>");
      }
    }
    if (prototype_toJSON) {
      return Array.prototype.toJSON = prototype_toJSON;
    }
  };

  root.ados_loadInline = function(accountId, siteId, adtype) {
    var chars, i, ran, randomName;
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    randomName = "";
    i = 0;
    while (i < 12) {
      ran = Math.floor(Math.random() * chars.length);
      randomName += chars.substring(ran, ran + 1);
      i++;
    }
    document.write("<div id=\"" + randomName + "\"></div>");
    return ados_add_placement(accountId, siteId, randomName, adtype);
  };

  root.ados_loadPassback = function(div, passbacks) {
    if (!window.ados.passbacks) {
      window.ados.passbacks = {};
    }
    if (!window.ados.currentPassback) {
      window.ados.currentPassback = {};
    }
    if (!window.ados.counted) {
      window.ados.counted = {};
    }
    window.ados.fire('passbackLoad', new passbackLoadData(div, passbacks));
    window.ados.passbacks[div] = passbacks;
    window.ados.counted[div] = false;
    return ados_execPassback(div, passbacks[0]);
  };

  root.ados_passback_next = function(div, id) {
    var chain, flight, idx, j, next, ref;
    chain = window.ados.passbacks[div];
    for (idx = j = ref = chain.length - 1; ref <= 0 ? j <= 0 : j >= 0; idx = ref <= 0 ? ++j : --j) {
      flight = chain[idx];
      if (flight.FlightId === id) {
        next = idx + 1;
        if (next === window.ados.passbacks[div].length) {
          return null;
        }
        window.ados.fire('passbackNext', new passbackNextData(div, id, window.ados.passbacks[div][next]));
        return window.ados.passbacks[div][next];
      }
    }
    throw new Error("Flight not found - make sure the network is returning the correct passback");
  };

  root.ados_passback_last = function(div, ids) {
    var chain, flight, id, idx, j, l, len1, next, potentialFlights, ref;
    chain = window.ados.passbacks[div];
    potentialFlights = [];
    for (j = 0, len1 = ids.length; j < len1; j++) {
      id = ids[j];
      for (idx = l = ref = chain.length - 1; ref <= 0 ? l <= 0 : l >= 0; idx = ref <= 0 ? ++l : --l) {
        flight = chain[idx];
        if (flight.FlightId === id) {
          next = idx + 1;
          if (next < window.ados.passbacks[div].length) {
            potentialFlights.push(next);
          }
        }
      }
    }
    if (potentialFlights.length === 0) {
      throw new Error("No eligible flight found to passback to");
    }
    window.ados.fire('passbackNext', new passbackNextData(div, id, next));
    return window.ados.passbacks[div][Math.max.apply(Math, potentialFlights)];
  };

  root.ados_findPassback = function(div, id) {
    var chain, flight, idx, j, ref;
    chain = window.ados.passbacks[div];
    for (idx = j = ref = chain.length - 1; ref <= 0 ? j <= 0 : j >= 0; idx = ref <= 0 ? ++j : --j) {
      flight = chain[idx];
      if (flight.FlightId === id) {
        return flight;
      }
    }
    throw new Error("Flight not found - make sure the network is returning the correct passback");
  };

  root.azk_clearframe = function(div, flightId) {
    var ifrm;
    ifrm = document.getElementById("ados_frame_" + div + "_" + flightId);
    if (ifrm !== null) {
      return ifrm.parentNode.removeChild(ifrm);
    }
  };

  root.ados_passback = function(div, flightId) {
    var next;
    ados_log('received passback for div:' + div + ' and flightId:' + flightId);
    next = ados_passback_next(div, flightId);
    ados_execPassback(div, next);
    return azk_clearframe(div, flightId);
  };

  root.azk_passback = function(div, flightIds) {
    var flightId, j, last, len1, results1;
    ados_log('received passback for div:' + div + ' and flightIds:' + flightIds);
    last = ados_passback_last(div, flightIds);
    ados_execPassback(div, last);
    results1 = [];
    for (j = 0, len1 = flightIds.length; j < len1; j++) {
      flightId = flightIds[j];
      if (flightId !== last.FlightId) {
        results1.push(azk_clearframe(div, flightId));
      } else {
        results1.push(void 0);
      }
    }
    return results1;
  };

  root.ados_execPassback = function(div, passback) {
    var timeout, timeoutScript;
    ados_log('loading flight:' + passback.FlightId);
    window.ados.currentPassback[div] = passback.FlightId;
    window.ados.fire('passbackExec', new passbackData(div, passback));
    timeoutScript = '';
    if (!window.ados.isAsync) {
      timeout = window.ados.passbackTimeout || passback.Timeout || 2500;
      timeoutScript = 'setTimeout(function() { ados_timeoutExpired("' + div + '", ' + passback.FlightId + ') }, ' + timeout + ')';
    }
    return eval(passback.Script + timeoutScript);
  };

  root.ados_timeoutExpired = function(div, flightId) {
    if (window.ados.currentPassback && window.ados.currentPassback[div] === flightId && window.ados.counted[div] === false) {
      window.ados.fire('passbackTimeout', new passbackTimeoutData(div, flightId));
      ados_log('time to passback expired for div:' + div + ' and flightid:' + flightId);
      return ados_passbackFilled(div, flightId);
    }
  };

  root.ados_frameLoaded = function(div, flightId, passbackTimeout) {
    var ifrm, timeout;
    ifrm = document.getElementById("ados_frame_" + div + "_" + flightId);
    if (ifrm !== null && ifrm.readyState !== "complete" && ifrm.readyState !== void 0) {
      return setTimeout((function() {
        return ados_frameLoaded(div, flightId, passbackTimeout);
      }), 100);
    } else if (window.ados.currentPassback && window.ados.currentPassback[div] === flightId) {
      timeout = window.ados.passbackTimeout || passbackTimeout || 400;
      return setTimeout((function() {
        return ados_passbackFilled(div, flightId);
      }), timeout);
    } else if (window.ados.currentPassback && window.ados.currentPassback[div]) {
      return azk_clearframe(div, flightId);
    }
  };

  root.ados_passbackFilled = function(div, flightId) {
    var flight;
    if (window.ados.currentPassback && window.ados.currentPassback[div] === flightId) {
      ados_log('flight is loaded for div: ' + div + ' and flightId:' + flightId);
      flight = ados_findPassback(div, flightId);
      if (flight.counted === void 0 && window.ados.counted[div] === false) {
        flight.counted = window.ados.counted[div] = true;
        return ados_passbackWritePixel(div, flight.VeriPixel, flightId);
      }
    } else {
      return azk_clearframe(div, flightId);
    }
  };

  root.ados_passbackWritePixel = function(div, url, flightId) {
    var adzerkDiv, pixel;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv !== null) {
      ados_log('writing pixel for div: ' + div + ' and flightId:' + flightId);
      pixel = document.createElement('img');
      pixel.setAttribute("height", "0px");
      pixel.setAttribute("width", "0px");
      pixel.setAttribute("border", "0");
      pixel.setAttribute("style", "position:absolute;");
      pixel.onerror = function() {
        return this.style.display = "none";
      };
      pixel.setAttribute("src", url);
      adzerkDiv.appendChild(pixel);
      return ados.fire('ImpressionCounted', new impressionData(div, url));
    }
  };

  root.ados_writePixel = function(div, url) {
    var adzerkDiv, impression_pixel_alt, pixel;
    impression_pixel_alt = (window.ados.accessibility || {}).impression_pixel_alt;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv !== null) {
      pixel = document.createElement('img');
      pixel.setAttribute("height", "0px");
      pixel.setAttribute("width", "0px");
      pixel.setAttribute("border", "0");
      pixel.setAttribute("style", "position:absolute;");
      pixel.onerror = function() {
        return this.style.display = "none";
      };
      pixel.setAttribute("src", url);
      if (impression_pixel_alt) {
        pixel.setAttribute("alt", impression_pixel_alt);
      }
      adzerkDiv.appendChild(pixel);
      return ados.fire('ImpressionCounted', new impressionData(div, url));
    }
  };

  root.ados_writeGenericPixel = function(div, url) {
    var adzerkDiv, pixel;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv !== null) {
      pixel = document.createElement('img');
      pixel.setAttribute("height", "0px");
      pixel.setAttribute("width", "0px");
      pixel.setAttribute("border", "0");
      pixel.setAttribute("style", "position:absolute;");
      pixel.onerror = function() {
        return this.style.display = "none";
      };
      pixel.setAttribute("src", url);
      return adzerkDiv.appendChild(pixel);
    }
  };

  root.ados_loadFIframe = function(div, content, flightid, height, width, passbackTimeout) {
    var adzerkDiv, doc, iframe_lang, iframe_title, ifrm, inner_html, lang, ref;
    ref = window.ados.accessibility || {}, iframe_title = ref.iframe_title, iframe_lang = ref.iframe_lang;
    adzerkDiv = document.getElementById(div);
    ifrm = document.createElement("iframe");
    ifrm.id = "ados_frame_" + div + "_" + flightid;
    ifrm.frameBorder = 0;
    ifrm.scrolling = "no";
    ifrm.noresize = "noresize";
    ifrm.marginheight = 0;
    ifrm.marginwidth = 0;
    if (height !== 0) {
      ifrm.height = height;
    }
    if (width !== 0) {
      ifrm.width = width;
    }
    if (iframe_title) {
      ifrm.title = iframe_title;
    }
    adzerkDiv.appendChild(ifrm);
    if (ifrm.attachEvent) {
      ifrm.attachEvent('onload', function() {
        return ados_frameLoaded(div, flightid, passbackTimeout);
      });
    } else {
      ifrm.onload = function() {
        return ados_frameLoaded(div, flightid, passbackTimeout);
      };
    }
    lang = iframe_lang ? " lang=\"" + iframe_lang + "\"" : '';
    inner_html = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">\n<html" + lang + "><head><style>div,iframe { top: 0; position:absolute; }</style></head><body style=\"margin:0px;padding:0px;\"><script type=\"text/javascript\">var divName = \"" + div + "\";var inFIF=true;var inDapIF = true;</script>" + content + "</body></html>";
    if (/msie/.test(navigator.userAgent.toLowerCase()) || window.opera) {
      ifrm.contentWindow.contents = inner_html;
      return ifrm.src = "javascript:window[\"contents\"]";
    } else {
      doc = ifrm.contentDocument;
      doc.open();
      doc.write(inner_html);
      doc.close();
      return ifrm;
    }
  };

  root.ados_passback_receiveMessage = function(evt) {
    var div, flightId, flightIds, flights, flt, ref, ref1, ref2;
    ref = (evt != null ? evt.data : void 0) || {}, flightId = ref.flightId, flightIds = ref.flightIds;
    if (!(flightId || flightIds)) {
      return;
    }
    flights = flightIds || [flightId];
    ref2 = ((ref1 = window.ados) != null ? ref1.currentPassback : void 0) || {};
    for (div in ref2) {
      flt = ref2[div];
      if (flights.indexOf(flt) !== -1) {
        ados_log("passback received via postMessage: div: " + div + ", flights: " + flights);
        if (flightIds) {
          return azk_passback(flightIds);
        } else {
          return ados_passback(flightId);
        }
      }
    }
  };

  window.ados = window.ados || {};

  window.ados.events = window.ados.events || {};

  window.ados.run = window.ados.run || [];

  window.zItems = window.zItems || [];

  window.adosResults = window.adosResults || {};

  window.ados.sessionId = zerk_generateUUID();

  window.ados.on = function(e, fn) {
    window.ados.events[e] = window.ados.events[e] || [];
    return window.ados.events[e].push(fn);
  };

  window.ados.fire = function(e, args) {
    var j, len1, ref, results1, zevent;
    if (window.ados.events[e] != null) {
      zevent = new zerkEvent(e, args);
      ref = window.ados.events[e];
      results1 = [];
      for (j = 0, len1 = ref.length; j < len1; j++) {
        e = ref[j];
        results1.push(e.call(null, zevent));
      }
      return results1;
    }
  };

  window.ados.isListening = window.ados.isListening || false;

  try {
    if (!window.ados.isListening) {
      window.ados.isListening = true;
      if (window.attachEvent) {
        window.attachEvent("message", ados_passback_receiveMessage, false);
      } else if (window.addEventListener) {
        window.addEventListener("message", ados_passback_receiveMessage, false);
      }
    }
  } catch (error) {
    e = error;
  }

  root.adosRun();

  setTimeout((function() {
    return root.adosRun();
  }), 1000);

  window.ados.fire('load', null);

}).call(this);

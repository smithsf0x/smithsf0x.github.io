/*
* @Author: smithsf0x
* @Date:   2015-12-19 13:30:47
* @Last Modified by:   smithsf0x
* @Last Modified time: 2015-12-19 13:30:58
*/

'use strict';

function pageSet(source, destination){
			document.getElementById(destination).innerHTML = document.getElementById(source).innerHTML;
		}

		window.onload = function() {
			pageSet('content_home', 'page');
		};

		function hideMenu(){
			document.getElementById('toggle').checked = false;
		}
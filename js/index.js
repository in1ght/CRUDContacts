// creating a local storage
if (!localStorage.getItem("contacts")) {
	localStorage.setItem('contacts','[]')
}
if (!localStorage.getItem("type_mode")) {
	localStorage.setItem('type_mode','table')
}



// preview file v2
function previewFile(el) {
	var preview = el.nextElementSibling;
	console.log(preview);
	var file = el.files[0];
	console.log(file);
	var reader = new FileReader();
	reader.onloadend = function() {
		document.getElementById('img__photo_container_change_content_changes').classList.remove('turned_off');
		document.getElementById('svg__menu__choice').classList.add('turned_off');
		preview.src = reader.result;
		preview.setAttribute('img_s',reader.result);
	};
	if (file) {
	  reader.readAsDataURL(file);
	} else {
		console.log('Allright');
	}
}

// opening and closing a  selection
// var selector = document.querySelector('.all_selects__location__my_contacts__main_nav');
function openc_select(target){
	var selector = target.firstElementChild.nextElementSibling;
	if (selector.childElementCount != 0) {
		if(selector.classList.contains('opened')) {
			selector.classList.remove('opened');
		}
		else{
			selector.classList.add('opened');
		}
	}
	else{
		console.log('no location finded')
	}
}

function openc_select_links(argument) {
	var selector = argument.nextElementSibling;
	if (selector.childElementCount != 0) {
		if(selector.classList.contains('opened')) {
			selector.classList.remove('opened');
		}
		else{
			selector.classList.add('opened');
		}
	}
	else{
		console.log('no location finded')
	}
}

// var closet1 = document.querySelector(".selector_con_form_soc");
// closet1.addEventListener("blur", function( closet ) {
// 	closet1.classList.remove('opened');
// }, true);


// select a option
function select_option(target){
	var input_select_a_group = target.parentElement.previousElementSibling;
	input_select_a_group.value = target.innerText;
	download_evrth();
}



// closing column number 1
var column_1 = document.querySelector('.about_me');
function close_column1(target_element){
	if(column_1.classList.contains('closed')) {
		column_1.classList.remove('closed');
		target_element.classList.remove('closed');
	}
	else{
		column_1.classList.add('closed');
		target_element.classList.add('closed');
	}
}

// open a creator for contacts
function open_creator(el){
	document.querySelector('.contact_creator').classList.remove('display_none');
	setTimeout(function (){
		document.querySelector('.contact_creator').classList.remove('blure16');
		document.querySelector('.columns_2').classList.add('blure15');
	},10)
}

// opening_and_back
function back_now(el){
	document.querySelector('.contact_creator').classList.add('blure16');
	document.querySelector('.columns_2').classList.remove('blure15');
	setTimeout(function (){
		document.querySelector('.contact_creator').classList.add('display_none');
	},300)
}


// downloading tasks from a local storage
function download_contacts_from_ls_table(){
	let contacts = JSON.parse(localStorage.getItem("contacts"));
	let filtered = []


	if (document.getElementById('input_change_format').value === "From Anywhere" || document.getElementById('input_change_format').value === "From Some Places") {
		document.getElementById('input_change_format').value = "From Anywhere";
		contacts.forEach(function(item){
			filtered.push(item);
		})
	}
	else {
		let result = contacts.filter(obj => obj.location === document.getElementById('input_change_format').value);
		console.log(result);
		result.forEach(function(item){
			filtered.push(item);
		})
	}

	filtered.forEach(function(item){
		let check = [];
		console.log(check);
		console.log(item.img.length);
		if (!(item.img.length === 0)) {
			check.push(`<img class="photo_contact_ed" id="photo__contact " src="${item.img}">`)
		}
		else{
			check.push(`<p class="p_photo_contact">${item.name.substring(0, 2)}</p>`)
		}
		let div = `<div id='${item.timeCreate}' class="contact__my_contacts">
		<div class="con_photo__contact ${item.important}" onclick='making_important(this)'>
		${check[0]}
		</div>
		<h2 class="name__contact">${item.name}</h2>
		<h2 class="description__contact">${item.work}</h2>
		<div class="socials__contact">
		<a href="${item.twitter}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm116.887 199.602c.113 2.52.168 5.05.168 7.593 0 77.645-59.102 167.18-167.184 167.184h.004-.004c-33.184 0-64.062-9.727-90.066-26.395 4.597.543 9.277.813 14.015.813 27.532 0 52.868-9.39 72.98-25.152-25.722-.477-47.41-17.465-54.894-40.813a58.481 58.481 0 0011.043 1.063c5.363 0 10.559-.723 15.496-2.07-26.886-5.384-47.14-29.145-47.14-57.598 0-.266 0-.504.007-.75a58.354 58.354 0 0026.614 7.347c-15.778-10.527-26.149-28.523-26.149-48.91a58.597 58.597 0 017.957-29.535c28.977 35.555 72.282 58.937 121.118 61.394a58.708 58.708 0 01-1.528-13.398c0-32.437 26.317-58.754 58.766-58.754 16.902 0 32.168 7.145 42.89 18.567a117.855 117.855 0 0037.313-14.262c-4.395 13.715-13.707 25.222-25.84 32.5 11.887-1.422 23.215-4.574 33.742-9.254a119.412 119.412 0 01-29.308 30.43zm0 0" />
		</svg>
		</a>
		<a href="${item.facebook}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M297.277 508.668zm0 0M302.398 507.793c-1.02.187-2.039.36-3.058.535 1.02-.176 2.039-.348 3.058-.535zm0 0M285.137 510.34zm0 0M290.055 509.738zm0 0M309.367 506.41zm0 0M326.664 502.113c-.726.207-1.453.403-2.18.606.727-.203 1.454-.399 2.18-.606zm0 0M321.434 503.543c-.79.207-1.582.418-2.375.617.793-.2 1.586-.406 2.375-.617zm0 0M314.59 505.254c-.836.195-1.68.379-2.524.566.844-.187 1.688-.37 2.524-.566zm0 0M277.527 511.09zm0 0M512 256C512 114.637 397.363 0 256 0S0 114.637 0 256s114.637 256 256 256c1.504 0 3-.031 4.5-.059V312.656h-55V248.56h55V201.39c0-54.703 33.395-84.477 82.191-84.477 23.368 0 43.454 1.742 49.309 2.52v57.171h-33.648c-26.547 0-31.688 12.618-31.688 31.13v40.824h63.477l-8.274 64.097h-55.203V502.11C433.668 471.434 512 372.852 512 256zm0 0M272.914 511.43zm0 0M264.754 511.836zm0 0" />
		</svg>
		</a>
		<a href="${item.link}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0" />
		</svg>
		</svg>
		</a>
		<a href="${item.instagram}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M305 256c0 27.063-21.938 49-49 49s-49-21.938-49-49 21.938-49 49-49 49 21.938 49 49zm0 0" />
		<path d="M370.594 169.305a45.546 45.546 0 00-10.996-16.903 45.514 45.514 0 00-16.903-10.996c-5.18-2.011-12.96-4.406-27.293-5.058-15.504-.707-20.152-.86-59.402-.86-39.254 0-43.902.149-59.402.856-14.332.656-22.118 3.05-27.293 5.062a45.483 45.483 0 00-16.903 10.996 45.572 45.572 0 00-11 16.903c-2.011 5.18-4.406 12.965-5.058 27.297-.707 15.5-.86 20.148-.86 59.402 0 39.25.153 43.898.86 59.402.652 14.332 3.047 22.114 5.058 27.293a45.563 45.563 0 0010.996 16.903 45.514 45.514 0 0016.903 10.996c5.18 2.015 12.965 4.41 27.297 5.062 15.5.707 20.144.856 59.398.856 39.258 0 43.906-.149 59.402-.856 14.332-.652 22.118-3.047 27.297-5.062a48.68 48.68 0 0027.899-27.899c2.011-5.18 4.406-12.96 5.062-27.293.707-15.504.856-20.152.856-59.402 0-39.254-.149-43.902-.856-59.402-.652-14.332-3.047-22.118-5.062-27.297zM256 331.485c-41.691 0-75.488-33.794-75.488-75.485s33.797-75.484 75.488-75.484c41.688 0 75.484 33.793 75.484 75.484S297.688 331.484 256 331.484zm78.469-136.313c-9.742 0-17.64-7.899-17.64-17.64s7.898-17.641 17.64-17.641 17.64 7.898 17.64 17.64c-.004 9.742-7.898 17.64-17.64 17.64zm0 0" />
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.71 15.649-3.199 26.333-6.832 35.684a75.164 75.164 0 01-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.675.715-20.683.887-60.605.887-39.926 0-44.93-.172-60.61-.887-15.644-.715-26.331-3.199-35.68-6.832a72.018 72.018 0 01-26.038-16.957 72.044 72.044 0 01-16.953-26.035c-3.633-9.348-6.121-20.035-6.832-35.68-.723-15.68-.891-20.687-.891-60.609s.168-44.93.887-60.605c.71-15.649 3.195-26.332 6.828-35.684a72.013 72.013 0 0116.96-26.035 72.003 72.003 0 0126.036-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.89c15.649.712 26.332 3.196 35.684 6.825a72.061 72.061 0 0126.04 16.96 72.027 72.027 0 0116.952 26.036c3.637 9.352 6.121 20.035 6.836 35.684.715 15.675.883 20.683.883 60.605s-.168 44.93-.887 60.605zm0 0" />
		</svg>
		</a>
		</div>
		<h2 id="location_contact" class="description__contact">${item.location}</h2>
		<div class="buttons__contact">
		<button onclick='delete_contact(this)' class="button_delete__contact">Delete From Contacts</button>
		</div>
		</div>`;
		document.querySelector('.center__my_contacts__general').innerHTML += div;
	})
}
function download_contacts_from_ls_list(){
	var contacts = JSON.parse(localStorage.getItem("contacts"));
	let filtered = []


	if (document.getElementById('input_change_format').value === "From Anywhere" || document.getElementById('input_change_format').value === "From Some Places") {
		document.getElementById('input_change_format').value = "From Anywhere";
		contacts.forEach(function(item){
			filtered.push(item);
		})
	}
	else {
		let result = contacts.filter(obj => obj.location === document.getElementById('input_change_format').value);
		console.log(result);
		result.forEach(function(item){
			filtered.push(item);
		})
	}

	filtered.forEach(function(item){
		let check = [];
		console.log(check);
		console.log(item.img.length);
		if (!(item.img.length === 0)) {
			check.push(`<img class="photo_contact_ed" id="photo__contact " src="${item.img}">`)
		}
		else{
			check.push(`<p class="p_photo_contact">${item.name.substring(0, 2)}</p>`)
		}
		let div = `<div id='${item.timeCreate}' class="list_type_contact_my_contacrs">
		<div class="photo_and_info__my_contacts">
		<div   onclick='making_important(this)' class="con_photo__contact  ${item.important}">
		${check[0]}
		</div>
		<div class="info__photo_and_info__my_contacts">
		<h2 class="name__contact">${item.name}</h2>
		<h2 class="description__contact">${item.work}</h2>
		<div class="socials__contact">
		<a href="${item.twitter}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm116.887 199.602c.113 2.52.168 5.05.168 7.593 0 77.645-59.102 167.18-167.184 167.184h.004-.004c-33.184 0-64.062-9.727-90.066-26.395 4.597.543 9.277.813 14.015.813 27.532 0 52.868-9.39 72.98-25.152-25.722-.477-47.41-17.465-54.894-40.813a58.481 58.481 0 0011.043 1.063c5.363 0 10.559-.723 15.496-2.07-26.886-5.384-47.14-29.145-47.14-57.598 0-.266 0-.504.007-.75a58.354 58.354 0 0026.614 7.347c-15.778-10.527-26.149-28.523-26.149-48.91a58.597 58.597 0 017.957-29.535c28.977 35.555 72.282 58.937 121.118 61.394a58.708 58.708 0 01-1.528-13.398c0-32.437 26.317-58.754 58.766-58.754 16.902 0 32.168 7.145 42.89 18.567a117.855 117.855 0 0037.313-14.262c-4.395 13.715-13.707 25.222-25.84 32.5 11.887-1.422 23.215-4.574 33.742-9.254a119.412 119.412 0 01-29.308 30.43zm0 0" />
		</svg>
		</a>
		<a href="${item.facebook}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M297.277 508.668zm0 0M302.398 507.793c-1.02.187-2.039.36-3.058.535 1.02-.176 2.039-.348 3.058-.535zm0 0M285.137 510.34zm0 0M290.055 509.738zm0 0M309.367 506.41zm0 0M326.664 502.113c-.726.207-1.453.403-2.18.606.727-.203 1.454-.399 2.18-.606zm0 0M321.434 503.543c-.79.207-1.582.418-2.375.617.793-.2 1.586-.406 2.375-.617zm0 0M314.59 505.254c-.836.195-1.68.379-2.524.566.844-.187 1.688-.37 2.524-.566zm0 0M277.527 511.09zm0 0M512 256C512 114.637 397.363 0 256 0S0 114.637 0 256s114.637 256 256 256c1.504 0 3-.031 4.5-.059V312.656h-55V248.56h55V201.39c0-54.703 33.395-84.477 82.191-84.477 23.368 0 43.454 1.742 49.309 2.52v57.171h-33.648c-26.547 0-31.688 12.618-31.688 31.13v40.824h63.477l-8.274 64.097h-55.203V502.11C433.668 471.434 512 372.852 512 256zm0 0M272.914 511.43zm0 0M264.754 511.836zm0 0" />
		</svg>
		</a>
		<a href="${item.link}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0" />
		</svg>
		</svg>
		</a>
		<a href="${item.instagram}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M305 256c0 27.063-21.938 49-49 49s-49-21.938-49-49 21.938-49 49-49 49 21.938 49 49zm0 0" />
		<path d="M370.594 169.305a45.546 45.546 0 00-10.996-16.903 45.514 45.514 0 00-16.903-10.996c-5.18-2.011-12.96-4.406-27.293-5.058-15.504-.707-20.152-.86-59.402-.86-39.254 0-43.902.149-59.402.856-14.332.656-22.118 3.05-27.293 5.062a45.483 45.483 0 00-16.903 10.996 45.572 45.572 0 00-11 16.903c-2.011 5.18-4.406 12.965-5.058 27.297-.707 15.5-.86 20.148-.86 59.402 0 39.25.153 43.898.86 59.402.652 14.332 3.047 22.114 5.058 27.293a45.563 45.563 0 0010.996 16.903 45.514 45.514 0 0016.903 10.996c5.18 2.015 12.965 4.41 27.297 5.062 15.5.707 20.144.856 59.398.856 39.258 0 43.906-.149 59.402-.856 14.332-.652 22.118-3.047 27.297-5.062a48.68 48.68 0 0027.899-27.899c2.011-5.18 4.406-12.96 5.062-27.293.707-15.504.856-20.152.856-59.402 0-39.254-.149-43.902-.856-59.402-.652-14.332-3.047-22.118-5.062-27.297zM256 331.485c-41.691 0-75.488-33.794-75.488-75.485s33.797-75.484 75.488-75.484c41.688 0 75.484 33.793 75.484 75.484S297.688 331.484 256 331.484zm78.469-136.313c-9.742 0-17.64-7.899-17.64-17.64s7.898-17.641 17.64-17.641 17.64 7.898 17.64 17.64c-.004 9.742-7.898 17.64-17.64 17.64zm0 0" />
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.71 15.649-3.199 26.333-6.832 35.684a75.164 75.164 0 01-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.675.715-20.683.887-60.605.887-39.926 0-44.93-.172-60.61-.887-15.644-.715-26.331-3.199-35.68-6.832a72.018 72.018 0 01-26.038-16.957 72.044 72.044 0 01-16.953-26.035c-3.633-9.348-6.121-20.035-6.832-35.68-.723-15.68-.891-20.687-.891-60.609s.168-44.93.887-60.605c.71-15.649 3.195-26.332 6.828-35.684a72.013 72.013 0 0116.96-26.035 72.003 72.003 0 0126.036-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.89c15.649.712 26.332 3.196 35.684 6.825a72.061 72.061 0 0126.04 16.96 72.027 72.027 0 0116.952 26.036c3.637 9.352 6.121 20.035 6.836 35.684.715 15.675.883 20.683.883 60.605s-.168 44.93-.887 60.605zm0 0" />
		</svg>
		</a>
		</div>
		</div>
		</div>
		<div class="delete_and_location__my_contacrs">
		<h2 id="location_contact" class="description__contact location_contaact special_list">${item.location}</h2>
		<button onclick='delete_contact(this)' class="button_delete__contact special_list material-icons">delete</button>
		</div>
		</div>`;
		document.querySelector('.center__my_contacts__general').innerHTML += div;
	})
}
function download_evrth(argument) {
	document.querySelector('.center__my_contacts__general').innerHTML = "";
	let type_mode = localStorage.getItem("type_mode");
	if (type_mode === 'table') {
		download_contacts_from_ls_table();
	} else{
		download_contacts_from_ls_list();
	};
}
download_evrth();


// creting a new contact
var groups=[];
var options=[];
document.querySelector(".form_add").addEventListener("submit",function(el){
	

	el.preventDefault();


	let obj = {
		timeCreate: Date.now(),
		name: el.target.elements.name.value,
		img: document.getElementById('img__photo_container_change_content_changes').getAttribute("img_s"),
		important: 'false',
		work: el.target.elements.work.value,
		location: el.target.elements.location.value,
		instagram: el.target.elements.instagram.value,
		link: el.target.elements.link.value,
		twitter: el.target.elements.twitter.value,
		facebook: el.target.elements.facebook.value
	};
	console.log(obj);
	document.querySelector('.input__location__my_contacts__main_nav').value = 'From Some Places';
	let arr = JSON.parse(localStorage.getItem("contacts"));
	arr.push(obj);
	localStorage.setItem("contacts", JSON.stringify(arr))
	let check = [];
	console.log(obj.img.length);
	if (!(obj.img.length === 0)) {
		check.push(`<img class="photo_contact_ed" id="photo__contact " src="${obj.img}">`)
	}
	else{
		check.push(`<p class="p_photo_contact">${obj.name.substring(0, 2)}</p>`)
	}
	let type_mode = localStorage.getItem("type_mode");
	if (type_mode === 'table') {
		let div = `<div id='${obj.timeCreate}' class="contact__my_contacts">
		<div class="con_photo__contact  ${obj.important}"  onclick='making_important(this)'>
		${check[0]}
		</div>
		<h2 class="name__contact">${obj.name}</h2>
		<h2 class="description__contact">${obj.work}</h2>
		<div class="socials__contact">
		<a href="${obj.twitter}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm116.887 199.602c.113 2.52.168 5.05.168 7.593 0 77.645-59.102 167.18-167.184 167.184h.004-.004c-33.184 0-64.062-9.727-90.066-26.395 4.597.543 9.277.813 14.015.813 27.532 0 52.868-9.39 72.98-25.152-25.722-.477-47.41-17.465-54.894-40.813a58.481 58.481 0 0011.043 1.063c5.363 0 10.559-.723 15.496-2.07-26.886-5.384-47.14-29.145-47.14-57.598 0-.266 0-.504.007-.75a58.354 58.354 0 0026.614 7.347c-15.778-10.527-26.149-28.523-26.149-48.91a58.597 58.597 0 017.957-29.535c28.977 35.555 72.282 58.937 121.118 61.394a58.708 58.708 0 01-1.528-13.398c0-32.437 26.317-58.754 58.766-58.754 16.902 0 32.168 7.145 42.89 18.567a117.855 117.855 0 0037.313-14.262c-4.395 13.715-13.707 25.222-25.84 32.5 11.887-1.422 23.215-4.574 33.742-9.254a119.412 119.412 0 01-29.308 30.43zm0 0" />
		</svg>
		</a>
		<a href="${obj.facebook}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M297.277 508.668zm0 0M302.398 507.793c-1.02.187-2.039.36-3.058.535 1.02-.176 2.039-.348 3.058-.535zm0 0M285.137 510.34zm0 0M290.055 509.738zm0 0M309.367 506.41zm0 0M326.664 502.113c-.726.207-1.453.403-2.18.606.727-.203 1.454-.399 2.18-.606zm0 0M321.434 503.543c-.79.207-1.582.418-2.375.617.793-.2 1.586-.406 2.375-.617zm0 0M314.59 505.254c-.836.195-1.68.379-2.524.566.844-.187 1.688-.37 2.524-.566zm0 0M277.527 511.09zm0 0M512 256C512 114.637 397.363 0 256 0S0 114.637 0 256s114.637 256 256 256c1.504 0 3-.031 4.5-.059V312.656h-55V248.56h55V201.39c0-54.703 33.395-84.477 82.191-84.477 23.368 0 43.454 1.742 49.309 2.52v57.171h-33.648c-26.547 0-31.688 12.618-31.688 31.13v40.824h63.477l-8.274 64.097h-55.203V502.11C433.668 471.434 512 372.852 512 256zm0 0M272.914 511.43zm0 0M264.754 511.836zm0 0" />
		</svg>
		</a>
		<a href="${obj.link}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0" />
		</svg>
		</svg>
		</a>
		<a href="${obj.instagram}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M305 256c0 27.063-21.938 49-49 49s-49-21.938-49-49 21.938-49 49-49 49 21.938 49 49zm0 0" />
		<path d="M370.594 169.305a45.546 45.546 0 00-10.996-16.903 45.514 45.514 0 00-16.903-10.996c-5.18-2.011-12.96-4.406-27.293-5.058-15.504-.707-20.152-.86-59.402-.86-39.254 0-43.902.149-59.402.856-14.332.656-22.118 3.05-27.293 5.062a45.483 45.483 0 00-16.903 10.996 45.572 45.572 0 00-11 16.903c-2.011 5.18-4.406 12.965-5.058 27.297-.707 15.5-.86 20.148-.86 59.402 0 39.25.153 43.898.86 59.402.652 14.332 3.047 22.114 5.058 27.293a45.563 45.563 0 0010.996 16.903 45.514 45.514 0 0016.903 10.996c5.18 2.015 12.965 4.41 27.297 5.062 15.5.707 20.144.856 59.398.856 39.258 0 43.906-.149 59.402-.856 14.332-.652 22.118-3.047 27.297-5.062a48.68 48.68 0 0027.899-27.899c2.011-5.18 4.406-12.96 5.062-27.293.707-15.504.856-20.152.856-59.402 0-39.254-.149-43.902-.856-59.402-.652-14.332-3.047-22.118-5.062-27.297zM256 331.485c-41.691 0-75.488-33.794-75.488-75.485s33.797-75.484 75.488-75.484c41.688 0 75.484 33.793 75.484 75.484S297.688 331.484 256 331.484zm78.469-136.313c-9.742 0-17.64-7.899-17.64-17.64s7.898-17.641 17.64-17.641 17.64 7.898 17.64 17.64c-.004 9.742-7.898 17.64-17.64 17.64zm0 0" />
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.71 15.649-3.199 26.333-6.832 35.684a75.164 75.164 0 01-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.675.715-20.683.887-60.605.887-39.926 0-44.93-.172-60.61-.887-15.644-.715-26.331-3.199-35.68-6.832a72.018 72.018 0 01-26.038-16.957 72.044 72.044 0 01-16.953-26.035c-3.633-9.348-6.121-20.035-6.832-35.68-.723-15.68-.891-20.687-.891-60.609s.168-44.93.887-60.605c.71-15.649 3.195-26.332 6.828-35.684a72.013 72.013 0 0116.96-26.035 72.003 72.003 0 0126.036-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.89c15.649.712 26.332 3.196 35.684 6.825a72.061 72.061 0 0126.04 16.96 72.027 72.027 0 0116.952 26.036c3.637 9.352 6.121 20.035 6.836 35.684.715 15.675.883 20.683.883 60.605s-.168 44.93-.887 60.605zm0 0" />
		</svg>
		</a>
		</div>
		<h2 id="location_contact" class="description__contact">${obj.location}</h2>
		<div class="buttons__contact">
		<button onclick='delete_contact(this)' class="button_delete__contact">Delete From Contacts</button>
		</div>
		</div>`;
		document.querySelector('.center__my_contacts__general').innerHTML += div;
	} else{
		let div = `<div id='${obj.timeCreate}' class="list_type_contact_my_contacrs">
		<div class="photo_and_info__my_contacts">
		<div   onclick='making_important(this)' class="con_photo__contact  ${obj.important}">
		${check[0]}
		</div>
		<div class="info__photo_and_info__my_contacts">
		<h2 class="name__contact">${obj.name}</h2>
		<h2 class="description__contact">${obj.work}</h2>
		<div class="socials__contact">
		<a href="${obj.twitter}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm116.887 199.602c.113 2.52.168 5.05.168 7.593 0 77.645-59.102 167.18-167.184 167.184h.004-.004c-33.184 0-64.062-9.727-90.066-26.395 4.597.543 9.277.813 14.015.813 27.532 0 52.868-9.39 72.98-25.152-25.722-.477-47.41-17.465-54.894-40.813a58.481 58.481 0 0011.043 1.063c5.363 0 10.559-.723 15.496-2.07-26.886-5.384-47.14-29.145-47.14-57.598 0-.266 0-.504.007-.75a58.354 58.354 0 0026.614 7.347c-15.778-10.527-26.149-28.523-26.149-48.91a58.597 58.597 0 017.957-29.535c28.977 35.555 72.282 58.937 121.118 61.394a58.708 58.708 0 01-1.528-13.398c0-32.437 26.317-58.754 58.766-58.754 16.902 0 32.168 7.145 42.89 18.567a117.855 117.855 0 0037.313-14.262c-4.395 13.715-13.707 25.222-25.84 32.5 11.887-1.422 23.215-4.574 33.742-9.254a119.412 119.412 0 01-29.308 30.43zm0 0" />
		</svg>
		</a>
		<a href="${obj.facebook}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M297.277 508.668zm0 0M302.398 507.793c-1.02.187-2.039.36-3.058.535 1.02-.176 2.039-.348 3.058-.535zm0 0M285.137 510.34zm0 0M290.055 509.738zm0 0M309.367 506.41zm0 0M326.664 502.113c-.726.207-1.453.403-2.18.606.727-.203 1.454-.399 2.18-.606zm0 0M321.434 503.543c-.79.207-1.582.418-2.375.617.793-.2 1.586-.406 2.375-.617zm0 0M314.59 505.254c-.836.195-1.68.379-2.524.566.844-.187 1.688-.37 2.524-.566zm0 0M277.527 511.09zm0 0M512 256C512 114.637 397.363 0 256 0S0 114.637 0 256s114.637 256 256 256c1.504 0 3-.031 4.5-.059V312.656h-55V248.56h55V201.39c0-54.703 33.395-84.477 82.191-84.477 23.368 0 43.454 1.742 49.309 2.52v57.171h-33.648c-26.547 0-31.688 12.618-31.688 31.13v40.824h63.477l-8.274 64.097h-55.203V502.11C433.668 471.434 512 372.852 512 256zm0 0M272.914 511.43zm0 0M264.754 511.836zm0 0" />
		</svg>
		</a>
		<a href="${obj.link}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0" />
		</svg>
		</svg>
		</a>
		<a href="${obj.instagram}">
		<svg class='svg_socials_main' height="512pt" viewBox="0 0 512 512" width="512pt">
		<path d="M305 256c0 27.063-21.938 49-49 49s-49-21.938-49-49 21.938-49 49-49 49 21.938 49 49zm0 0" />
		<path d="M370.594 169.305a45.546 45.546 0 00-10.996-16.903 45.514 45.514 0 00-16.903-10.996c-5.18-2.011-12.96-4.406-27.293-5.058-15.504-.707-20.152-.86-59.402-.86-39.254 0-43.902.149-59.402.856-14.332.656-22.118 3.05-27.293 5.062a45.483 45.483 0 00-16.903 10.996 45.572 45.572 0 00-11 16.903c-2.011 5.18-4.406 12.965-5.058 27.297-.707 15.5-.86 20.148-.86 59.402 0 39.25.153 43.898.86 59.402.652 14.332 3.047 22.114 5.058 27.293a45.563 45.563 0 0010.996 16.903 45.514 45.514 0 0016.903 10.996c5.18 2.015 12.965 4.41 27.297 5.062 15.5.707 20.144.856 59.398.856 39.258 0 43.906-.149 59.402-.856 14.332-.652 22.118-3.047 27.297-5.062a48.68 48.68 0 0027.899-27.899c2.011-5.18 4.406-12.96 5.062-27.293.707-15.504.856-20.152.856-59.402 0-39.254-.149-43.902-.856-59.402-.652-14.332-3.047-22.118-5.062-27.297zM256 331.485c-41.691 0-75.488-33.794-75.488-75.485s33.797-75.484 75.488-75.484c41.688 0 75.484 33.793 75.484 75.484S297.688 331.484 256 331.484zm78.469-136.313c-9.742 0-17.64-7.899-17.64-17.64s7.898-17.641 17.64-17.641 17.64 7.898 17.64 17.64c-.004 9.742-7.898 17.64-17.64 17.64zm0 0" />
		<path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.71 15.649-3.199 26.333-6.832 35.684a75.164 75.164 0 01-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.675.715-20.683.887-60.605.887-39.926 0-44.93-.172-60.61-.887-15.644-.715-26.331-3.199-35.68-6.832a72.018 72.018 0 01-26.038-16.957 72.044 72.044 0 01-16.953-26.035c-3.633-9.348-6.121-20.035-6.832-35.68-.723-15.68-.891-20.687-.891-60.609s.168-44.93.887-60.605c.71-15.649 3.195-26.332 6.828-35.684a72.013 72.013 0 0116.96-26.035 72.003 72.003 0 0126.036-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.89c15.649.712 26.332 3.196 35.684 6.825a72.061 72.061 0 0126.04 16.96 72.027 72.027 0 0116.952 26.036c3.637 9.352 6.121 20.035 6.836 35.684.715 15.675.883 20.683.883 60.605s-.168 44.93-.887 60.605zm0 0" />
		</svg>
		</a>
		</div>
		</div>
		</div>
		<div class="delete_and_location__my_contacrs">
		<h2 id="location_contact" class="description__contact location_contaact special_list">${obj.location}</h2>
		<button onclick='delete_contact(this)' class="button_delete__contact special_list material-icons">delete</button>
		</div>
		</div>`;
		document.querySelector('.center__my_contacts__general').innerHTML += div;
	};
	document.getElementById('svg__menu__choice').classList.remove('turned_off');
	document.getElementById('img__photo_container_change_content_changes').src = '';
	document.querySelectorAll(".form_add input").forEach(function(item){
		item.value = "";
	})
	document.getElementById('img__photo_container_change_content_changes').setAttribute('img_s','');
})


// deleting a contact
function delete_contact(argument) {
	let main_contact = argument.parentElement.parentElement;
	let main_contact_id = main_contact.getAttribute("id");
	let contacts = JSON.parse(localStorage.getItem("contacts"));
	let arr = [];
	contacts.forEach(function(item){
		arr.push(item.timeCreate);
	})
	var current = arr.indexOf(+main_contact_id);
	if (contacts[current].important == "true") {
		document.querySelector(".p_alert").innerText = `You can't delete favorite contact`;
		document.querySelector('.error_alert').classList.remove('enbled_error');
		setTimeout(function (el){
			document.querySelector('.error_alert').classList.add('enbled_error');
		},2800)
	} else{
		contacts.splice(current, 1);
		console.log(contacts);
		localStorage.setItem("contacts", JSON.stringify(contacts));
		main_contact.remove();
	}
}


//making important
function making_important(argument) {
	let type_mode = localStorage.getItem("type_mode");
	let check_important = [];
	if (type_mode === 'table') {
		let main_contact_bool = argument.parentElement;
		check_important.push(main_contact_bool);
	} else{
		let main_contact_bool = argument.parentElement.parentElement;
		check_important.push(main_contact_bool);
	};
	let main_contact = check_important[0];
	let main_contact_id = main_contact.getAttribute("id");
	let contacts = JSON.parse(localStorage.getItem("contacts"));
	let arr = [];
	contacts.forEach(function(item){
		arr.push(item.timeCreate);
	})
	var current = arr.indexOf(+main_contact_id);
	console.log(contacts[current].important);
	if (contacts[current].important === 'false') {
		contacts[current].important = 'true';
		console.log('ghgjgh',current);
		argument.classList.add('true');
	} else {
		contacts[current].important = 'false';
		console.log('falseghj');
		argument.classList.remove('true');
	}
	console.log(contacts);
	localStorage.setItem("contacts", JSON.stringify(contacts))
}


// list style type (chngest contacts from table mode to list mode and reverse)
function change_mode_type(argument) {
	let type_mode = localStorage.getItem("type_mode");
	if (type_mode === 'table') {
		localStorage.setItem("type_mode", 'list');
		document.querySelector('.center__my_contacts__general').innerHTML = "";
		document.querySelectorAll('.icon__select__my_contacts__main_nav').forEach(function(item){item.classList.remove('active');});
		document.getElementById('list_style_type_enable').classList.add('active');
		download_contacts_from_ls_list();
	} else{
		localStorage.setItem("type_mode", 'table');
		document.querySelector('.center__my_contacts__general').innerHTML = "";
		var contacts = JSON.parse(localStorage.getItem("contacts"));
		document.querySelectorAll('.icon__select__my_contacts__main_nav').forEach(function(item){item.classList.remove('active');});
		document.getElementById('table_style_type_enable').classList.add('active');
		download_contacts_from_ls_table();
	};

}
<?php
/*
 * @Author: ogi.setiawan 
 * @Date: 2021-07-18 00:06:05 
 * @Last Modified by: ogisetiawan21@gmail.com
 * @Last Modified time: 2022-09-14 13:52:02
 */
//@ DASAR JAVASCRIPT
//~ Sejarah Javascript
//? javascript termasuk bahasa interpreter, yang tidak perlu dicompile saat dijalankan
//? javascript dibuat oleh Netscape, dlu namanya Mocha dan Livescript, dan sekarang ECMAScript
//~ Variable
//? var, let dan const. variable var tidak diserankan kembali
//? tidak disaranakn menulis variable "Data"
//? lebih baik menggunakan camelCase pada variable
//? variable const bernilai konstan, artinya tidak dapat diubah setelah di initalisasi
//~ Tipe Data
//? typeof; mengecek tipe data pada sebuah variable
//~ Operator
//? == 'sama' dan === 'identik
//? switch statment digunakan untuk stament yang identik;
//? if statement digunakan untuk statement identik maupun yang sama;
//~ Perulangan
//? For of Loop; digunakan pada ECMAScript(2015) ES6
//? while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.
//~ Struktur Data
//? object ; mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.
//? array ; tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel
//~ Fungsi
//? sebagai blok kode atau prosedur yang dapat digunakan secara berulang / merupakan sebuah variabel yang berisi blok logika

//@ BROWSER OBJECT MODEL, DOCUMENT OBJECT MODEL DAN EVENT
//~ Menambahkan Javascript Di Website
//? menbamahkan tag script untuk js eksternal lebih baik di akhir.
//~ BrWoser Enviorement
//? kode js berjalan di prangkat browser karena meyediakan browser object model (BOM) dan (DOM)
//~ BOM ( Browser Object Model)
//? Objek JavaScript yang tersedia di browser yang dapat digunakan untuk mengontrol browser.
//? contohnya alert(), prompt dan console
//~ DOM ( Document Object Model )
//? Objek JavaScript yang tersedia di browser yang dapat digunakan untuk mengontrol dan memanipulasi konten yang ditampilkan pada website.
//? getElementById(); mendapatkan element dari ID (<button id="nama"...)
//? getElementsByName(); mendapatkan element dari attribute name (<input name="nama"...)
//? getElementsByClassName(); mendapatkan element dari class name
//? getElements ByTagName(); mendapatkan element dari sebuah tag (<div>)
//? querySelector(); mendpatkan element dari element class pertama ( document.querySelector(".button"); / document.querySelector("#attributeID");)
//? querySelectorAll(); mendpatkan element dari semua element class
//~ Event
//? macam-macam event, form event, keyboard event, clipboard event, mouse event dll
//? onload; event ketika halaman web pertama kali di load
//? onpageshow; event ketika halaman web dikunjungi kembali
//? event handler; menulis event didalam js langsung yg meninisialisasi sebuah fungsi (  document.body.onload = namaFungsi' )
//? inline event handler; menulis event lgsung di sbuah atribute html ( onclick='namaFungsi()' )
//? addEventListener ; sama dgn event handler dan bisa menjalankan 2 fungsi sekaligus ( window.addEventListener('load', namaFungsi) )
//~ Form
//? event.preventDefault() ; berfungsi untuk mencegah halaman load pada web

//@ WEB STORAGE
//? salah satu web API yg dapat menyimpan data secara lokal ( dr sisi client )
//? data disimpan berdasarkan domain, web storage dapat menampung 10MB dalam satu domain
//? tidak semua browser tersedia browser storage
//~ Local Storage
//? Data yang disimpan tidak akan hilang bila browser atau tabs browser ditutup kecuali jika kita menghapusnya.
//~ Session Storage
//? Data masih ada jika direfresh tetapi akan hilang jika browser ditutup atau tab telah di close
//? setItem(key, value); untuk menambahkan nilai pada session/local storage
//? getItem(key); untuk mengambil value pada sebuah session/local storage
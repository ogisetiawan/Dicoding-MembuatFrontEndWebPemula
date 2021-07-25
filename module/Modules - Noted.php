<?php
/*
 * @Author: ogi.setiawan 
 * @Date: 2021-07-18 00:06:05 
 * @Last Modified by: ogi.setiawan
 * @Last Modified time: 2021-07-24 20:20:18
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
//~ Broser Enviorement
//? kode js berjalan di prangkat browser karena meyediakan browser object model (BOM) dan (DOM)
//~ DOM ( Document Object Model )
//? getElementById(); mendapatkan element dari ID (<button id="nama"...)
//? getElementsByName(); mendapatkan element dari attribute name (<input name="nama"...)
//? getElementsByClassName(); mendapatkan element dari class name
//? getElements ByTagName(); mendapatkan element dari sebuah tag (<div>)
//? querySelector(); mendpatkan element dari element class pertama ( document.querySelector(".button"); / document.querySelector("#attributeID");)
//? querySelectorAll(); mendpatkan element dari semua element class
//~ Event
//? onload; event ketika halaman web pertama kali di load
//? onpageshow; event ketika halaman web dikunjungi kembali
//? event handler; menulis event didalam js langsung yg meninisialisasi sebuah fungsi (  document.body.onload = namaFungsi' )
//? inline event handler; menulis event lgsung di sbuah atribute html ( onclick='namaFungsi()' )
//? addEventListener ; sama dgn event handler dan bisa menjalankan 2 fungsi sekaligus ( window.addEventListener('load', namaFungsi) )
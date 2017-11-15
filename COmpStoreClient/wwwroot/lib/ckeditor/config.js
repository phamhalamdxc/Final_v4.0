﻿/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.toolbarGroups = [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] }
    ];

    config.removeButtons = 'Save,Print';

    //config.filebrowserBrowseUrl = '/lib/ckfinder/ckfinder.html';
    //config.filebrowserImageBrowseUrl = '/lib/ckfinder/ckfinder.html?type=Images';
    //config.filebrowserFlashBrowseUrl = '/lib/ckfinder/ckfinder.html?type=Flash';
    //config.filebrowserUploadUrl = '/lib/ckfinder/core/connector/asp/connector.asp?command=QuickUpload&type=Files';
    //config.filebrowserImageUploadUrl = '/lib/ckfinder/core/connector/asp/connector.asp?command=QuickUpload&type=Images';
    //config.filebrowserFlashUploadUrl = '/lib/ckfinder/core/connector/asp/connector.asp?command=QuickUpload&type=Flash';
};
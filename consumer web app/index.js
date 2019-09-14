$(function(){
    //age gropus
    var age_groups = [{
        id:1,
        name: "Any",
        min_age:0,
        max_age:150
    },{
        id:2,
        name: "Baby (0-3)",
        min_age:0,
        max_age:3
    },{
        id:3,
        name: "Young (4-9)",
        min_age:4,
        max_age:9
    },{
        id:4,
        name: "Teen (10-17)",
        min_age:10,
        max_age:7
    },{
        id:5,
        name: "Youth (18-36)",
        min_age:18,
        max_age:36
    },{
        id:6,
        name: "Adult (37-65)",
        min_age:37,
        max_age:65
    },{
        id:7,
        name: "Grandy (66+)",
        min_age:66,
        max_age:150
    }];
    //colors
    var colors = [{
        id:1,
        name: "Any",
        css_class:""
    },{
        id:2,
        name: "Red",
        css_class:"cci-red"
    },{
        id:2,
        name: "Blue",
        css_class:"cci-blue"
    },{
        id:3,
        name: "Green",
        css_class:"cci-green"
    }];
    //sizes
    var sizes =[{
        id:1,
        name: "Any"
    },{
        id:2,
        name: "Slender (small)"
    },{
        id:3,
        name: "Large (L)"
    },{
        id:4,
        name: "Extra Large (XXL)"
    },{
        id:5,
        name: "Extra Large (XXL)"
    }];
    
    //materials
    var materials = [{
        id:1,
        name: "Leather",
        description:""
    },{
        id:2,
        name: "Cotton",
        description:""
    },{
        id:3,
        name: "Silk",
        description:""
    },{
        id:4,
        name: "Jean",
        description:""
    }];

    //categories
    //the ranking of a category will go up when ever someone buys an item in that categor
    //the ranking will be used to order items here
    //add to whish list has 1
    //likes contributes 1/2
    //buy has 1.5
    //every buy is irespective of the quanty ordered for
    var categories = [{
        id:1,
        name: "Any",
        gender: "any",
        ranking:34
    },{
        id:2,
        name: "Skirts",
        gender: "female",
        ranking:34
    },{
        id:3,
        name: "Shirts",
        gender: "any",
        ranking:34
    },{
        id:4,
        name: "Trousers",
        gender: "any",
        ranking:34
    },{
        id:5,
        name: "Shorts",
        gender: "any",
        ranking:34
    },{
        id:6,
        name: "Stockings",
        gender: "any",
        ranking:34
    },{
        id:7,
        name: "Legging",
        gender: "any",
        ranking:34
    },{
        id:8,
        name: "Tops",
        gender: "female",
        ranking:34
    },{
        id:9,
        name: "Blazzers",
        gender: "any",
        ranking:34
    },{
        id:10,
        name: "Jumpsuits",
        gender: "any",
        ranking:34
    },{
        id:2,
        name: "Skirts",
        gender: "female",
        ranking:34
    },{
        id:3,
        name: "Shirts",
        gender: "any",
        ranking:34
    },{
        id:4,
        name: "Trousers",
        gender: "any",
        ranking:34
    },{
        id:5,
        name: "Shorts",
        gender: "any",
        ranking:34
    },{
        id:6,
        name: "Stockings",
        gender: "any",
        ranking:34
    },{
        id:7,
        name: "Legging",
        gender: "any",
        ranking:34
    },{
        id:8,
        name: "Tops",
        gender: "female",
        ranking:34
    },{
        id:9,
        name: "Blazzers",
        gender: "any",
        ranking:34
    },{
        id:10,
        name: "Jumpsuits",
        gender: "any",
        ranking:34
    }];
    
    //search results
    var sr = [];
    for(var i=0;i<50;i++){
        sr.push({});
    }
    var indexApp = new Vue({
        el:"#indexApp",
        data:{
            searchResults:sr,
            age_groups: age_groups,
            selected_age_group_ids:[4,5],
            colors:colors,
            selected_color_ids:[3],
            sizes:sizes,
            selected_size_ids:[2],
            categories:categories.slice(0,18),
            selected_category_ids:[3,5,7],
            materials:materials,
            selected_material_ids:[2,3]
        },
        methods:{

        }
    });
});
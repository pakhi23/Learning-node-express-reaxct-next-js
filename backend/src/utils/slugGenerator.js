const slugify = require('slugify');

exports.generateSlug = (name)=>{
    // 'slugify' ka use karke dish ka naam slug mein convert karenge (lowercase aur special characters remove karte hue)
    return slugify(name,{lower:true,strict:true,replacement: '-'});
}

//{ lower: true, strict: true }: Ensures that the slug is all lowercase and removes any special characters (like spaces, symbols).
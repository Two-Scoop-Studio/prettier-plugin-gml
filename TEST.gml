#region Enemy damage

var enemy = argument0; var damage = argument1

with(enemy)
{

	  self.hp-=damage
	if(self.hp<=0){instance_destroy(self)}
}

#endregion

///@func func_add
/// @description Add 2 numbers
function func_add(n1, n2) {
    return n1 + n2;
}

/// @function func_sub
/// @desc Subtract 2 numbers
function func_sub(n1, n2) {
    return n1 - n2;
}
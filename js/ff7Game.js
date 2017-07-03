class Entity{
// name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon, armor
    constructor(name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon, armor){
        this.name = name;
        // POINTS
        this.exp = exp;
        this.lvl = lvl;
        this.hp = hp + weapon[0] + armor[0];
        this.mp = mp + weapon[1] + armor[1];
        // PRIMARY STATS
        this.strength = strength + weapon[2] + armor[2];
        this.dexterity = dexterity + weapon[3] + armor[3];
        this.vitality = vitality + weapon[4] + armor[4];
        this.magic = magic + weapon[5] + armor[5];
        this.spirit = spirit + weapon[6] + armor[6];
        this.luck = luck + weapon[7] + armor[7];
        // DERIVED STATS/ BATTLE STATS
        this.atk = this.strength + weapon[8] + armor[8];
        this.atkProb = weapon[9] + armor[9];
        this.dfence = this.vitality + weapon[10] + armor[10];
        this.dfenceProb = (this.dexterity / 4) + weapon[11] + armor[11];
        this.magAtk = this.magic + weapon[12] + armor[12];
        this.magdef = this.spirit + weapon[13] + armor[13];
        this.magdefProb =  weapon[14] + armor[14];

        // PHYSICAL DAMAGE
        this.baseDamage = this.atk + (((this.atk + this.lvl) / 32) * ((this.atk * this.lvl) / 32)) * (
            (3841 + Math.floor(Math.random()*255)) / 4096)

        // MAGICAL DAMAGE
        this.baseDamageM = 6 * (this.magAtk + this.lvl)
    }


    slashAll(enemies){
        return this.baseDamage
    }
}

class Weapon{
// hp, mp, str, dext, vit, mag, spr, lck , att, att%, def, def%, mAtk, mcDef, mcDef%,
    busterSword(){
        return [0, 0, 0, 0, 0, 0, 0, 0, 18, 96, 0, 0, 0, 0, 0];
    }

    assaultGun(){
        return [0, 0, 2, 0, 0, 0, 0, 0, 24, 0 , 17, 98, 10, 0, 0 ];
    }
}

// hp, mp, str, dext, vit, mag, spr, lck , att, att%, def, def%, mAtk, mcDef, mcDef%,
class Armor{
    ironBangle(){
        return [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0];
    }

    ziedrich(){
        return [0, 0, 98, 18, 20, 0, 0, 20, 0, 0, 0, 0, 100, 15, 0];
    }
}


class Hero extends Entity{
    constructor(name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon, armor){
        super(name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon, armor);
    }
}

class Enemy extends Entity{
    constructor(name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon, armor){
        super(name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon, armor);
    }
}











/*
//from random import randint  # print (randint(1,9))

class Weapon:
def buster_sword(self):

return 0, 0, 18, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0


def assault_gun(self):
return 0, 0, 17, 98, 10, 0, 0, 2, 0, 0, 0, 0, 0, 24, 0

def leather_glove(self):
return 0, 0, 17, 98, 10, 0, 0, 2, 0, 0, 0, 0, 0, 24, 0

def ultimate_weapon(self):
#  hp, mp ,att,att%,def,def%, mAtk,mcDef, mcDef%, str, dext, vit, mag, spr, lck
return 0, 0, 100, 110, 0, 0, 51, 0, 0, 0, 0, 0, 0, 24, 0


def noWeapon(self):
return 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0



class Armor:

def iron_bangle(self):
return 0, 0, 0, 0, 10, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0

def ziedrich(self):
#  hp, mp ,attack,attackProb,defense,defenseProb, magicAtk,magicDef, magcDefProb, strength, dexterity, vitality, magic, spirit, luck
return 0, 0, 0, 0, 100, 15, 0, 98, 18, 20, 0, 0, 20, 0, 0

def noArmor(self):
return 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

class Entity{
    constructor(name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon,armor){


    }

}

class Materia():
def __init__(self, name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon,
    armor):
self.name = name
# POINTS
self.exp = exp
self.lvl = lvl
self.hp = hp + weapon[0] + armor[0]
self.mp = mp + weapon[1] + armor[1]
# PRIMARY STATS
self.strength = strength + weapon[9] + armor[9]
self.dexterity = dexterity + weapon[10] + armor[10]
self.vitality = vitality + weapon[11] + armor[11]
self.magic = magic + weapon[12] + armor[12]
self.spirit = spirit + weapon[13] + armor[13]
self.luck = luck + weapon[14] + armor[14]
# DERIVED STATS/ BATTLE STATS
self.atk = self.strength + weapon[2] + armor[2]
self.atkProb = weapon[3] + armor[3]
self.dfence = self.vitality + weapon[4] + armor[4]
self.dfenceProb = int((self.dexterity / 4) + weapon[5] + armor[5])
self.magAtk = self.magic + weapon[6] + armor[6]
self.magdef = self.spirit + weapon[7] + armor[7]
self.magdefProb =  weapon[8] + armor[8]

# PHYSICAL DAMAGE
self.baseDamage = self.atk + (((self.atk + self.lvl) / 32) * ((self.atk * self.lvl) / 32)) * (
    (3841 + randint(0, 255)) / 4096)

# MAGICAL DAMAGE
self.baseDamageM = 6 * (self.magAtk + self.lvl)




def showStats(self):
print ('Name  = {} '.format(self.name))
print ('Exp  = {} '.format(self.exp))
print ('Level  = {} '.format(self.lvl))
print ('Hp  = {} '.format(self.hp))
print ('Mp  = {} '.format(self.mp))
print ('Strength  = {} '.format(self.strength))
print ('Dexterity  = {} '.format(self.dexterity))
print ('Vitality  = {} '.format(self.vitality))
print ('Magic  = {} '.format(self.magic))
print ('Spirit  = {} '.format(self.spirit))
print ('Luck  = {}\n '.format(self.luck))

def showStatsDer(self):
print ('Attack  = {} '.format(self.atk))
print ('Attack%  = {} '.format(self.atkProb))
print ('Defense  = {} '.format(self.dfence))
print ('Defense%  = {} '.format(self.dfenceProb))
print ('Magic Att  = {} '.format(self.magAtk))
print ('Magic Def  = {} '.format(self.magdef))
print ('Magic Def%  = {}\n '.format(self.magdefProb))



def counterAtk(self):
return 'counterAtk'

def doubleCut(self):
return self.baseDamage * 2, 'this is double cut baby'

def slashAll(self):
return self.baseDamage, 'this is slash all baby'

def mime(self):
return 'mime'

def w_item(self):
return 'w_item'

def hp_plus(self):
return 'hp_plus'

def elemental(self):
return 'elemental'

def fire(self):
return 'fire'

def finalAtk(self):
return 'finalAtk'

def phoenix(self):
return 'phoenix'

def aLL(self):
return 'all'

def fire_all(self):
return self.baseDamageM / 2, 'this is fireAll baby'


def big_bomber(self):
return self.baseDamage * 3.25, 'this is big bomber'





def __str__(self):
return self.name


class Character(Materia):

#  attack_move is a tuple from the return value of fire_all function
def attack(self, attack_move, *args):
# print (enemy1.hp + enemy2.hp)
# self.pwrFactor = 1

print('{} attacked with , {} '.format(self, attack_move[1]))
for arg in args:
# print(arg)
arg.hp -= attack_move[0] * ((512 - arg.dfence) / 512)
print(attack_move[0] * ((512 - arg.dfence) / (512)*((
    (3841 + randint(0, 255)) / 4096))))
# print('{} is the defense of {}'.format(arg.dfc, arg.name))
print('{} has {} life left \n'.format(arg, arg.hp))  # arg and arg.name is the same __str__

if arg.hp <= 0:
print('{} is dead \n'.format(arg))


def displayStats(self):
pass

# self.actualDamage = attack_move[0] *   (1*(512-enemy1.dfence)*self.baseDamage)/(16*512)

# self.actualDamage = self.baseDamage * ((3841 + randint(0, 255))/4096)


class Enemy(Character):
def __init__(self, name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon,
    armor,att,attP,dfc,dfcP, mAtk,mDef, mDefP):
super().__init__(name, exp, lvl, hp, mp, strength, dexterity, vitality, magic, spirit, luck, weapon,
    armor )

self.att = att
self.attP = attP
self.dfc = dfc
self.dfcP = dfcP
self.mAtk = mAtk
self.mDef = mDef
self.mDefP = mDefP

# PHYSICAL DAMAGE overwritting baseDamege variable
self.baseDamage = self.att + (((self.att + self.lvl) / 32) * ((self.att * self.lvl) / 32)) * (
    (3841 + randint(0, 255)) / 4096)

# MAGICAL DAMAGE
self.baseDamageM = 6 * (self.mAtk + self.lvl)



def showStatsDer(self):
print ('Attack  = {} '.format(self.att))
print ('Attack%  = {} '.format(self.attP))
print ('Defense  = {} '.format(self.dfc))
print ('Defense%  = {} '.format(self.dfcP))
print ('Magic Att  = {} '.format(self.mAtk))
print ('Magic Def  = {} '.format(self.mDef))
print ('Magic Def%  = {}\n '.format(self.mDefP))




*/

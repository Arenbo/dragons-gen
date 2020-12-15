const GenEggs = require('./eggs/main');
const GenDragon = require('./dragons/main');

module.exports = {
  GenEggs,
  GenDragon
};

// 0
// 1
// 2 aura
// 3 aura-color
// 4 wings
// 5
// 6
// 7 tails
// 8
// 9
// 10
// 11 color
// 12
// 13
// 14
// 15 scale color
// 16 horns
// 17
// 18 head
// 19
// 20
// 21
// 22
// 23 claws color
// 24 eyes
// 25 eyes color

// example - 7 types of tails

// let gens = '0-12-4-4-2-33-3-0-0-1-321-213-6-100-0-0-1-22-1-55-204-0-5-9-3-76-55-13-1-2-6-3';
// let genDragon = new GenDragon(gens, 400);
// let gens = '0-12-4-4-2-33-3-1-0-1-321-213-6-100-0-0-1-22-1-55-204-0-5-9-3-76-55-13-1-2-6-3';
// let genDragon = new GenDragon(gens, 401);
let gens = '0-12-4-4-2-33-3-2-0-1-321-213-6-100-0-0-1-22-1-55-204-0-5-9-3-76-55-13-1-2-6-3';
let genDragon = new GenDragon(gens, 402);
// let gens = '0-12-4-4-2-33-3-3-0-1-321-213-6-100-0-0-1-22-1-55-204-0-5-9-3-76-55-13-1-2-6-3';
// let genDragon = new GenDragon(gens, 403);
// let gens = '0-12-4-4-2-33-3-4-0-1-321-213-6-100-0-0-1-22-1-55-204-0-5-9-3-76-55-13-1-2-6-3';
// let genDragon = new GenDragon(gens, 404);
// let gens = '0-12-4-4-2-33-3-5-0-1-321-213-6-100-0-0-1-22-1-55-204-0-5-9-3-76-55-13-1-2-6-3';
// let genDragon = new GenDragon(gens, 405);
// let gens = '0-12-4-4-2-33-3-6-0-1-321-213-6-100-0-0-1-22-1-55-204-0-5-9-3-76-55-13-1-2-6-3';
// let genDragon = new GenDragon(gens, 406);
// let gens = '0-12-4-4-2-33-3-7-0-1-321-213-6-100-0-0-1-22-1-55-204-0-5-9-3-76-55-13-1-2-6-3';
// let genDragon = new GenDragon(gens, 407);


genDragon.onGenerateFragments();
// need fixed tails no working details.

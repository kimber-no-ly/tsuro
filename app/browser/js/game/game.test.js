describe('GameAssets', function(){
	beforeEach(module('PathParadox'));

  var GameAssets;
  beforeEach('Get game assets', inject(function (_GameAssets_) {
    GameAssets = _GameAssets_;
  }));

	it('is an object', function () {
    expect(GameAssets).to.be.an('object');
  });

});


/*
starttop: [
  [0, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
  [1, 0, 1],
  [2, 0, 0],
  [2, 0, 1],
  [3, 0, 0],
  [3, 0, 1],
  [4, 0, 0],
  [4, 0, 1],
  [5, 0, 0],
  [5, 0, 1]
],
startleft: [
  [0, 0, 7],
  [0, 0, 6],
  [0, 1, 7],
  [0, 1, 6],
  [0, 2, 7],
  [0, 2, 6],
  [0, 3, 7],
  [0, 3, 6],
  [0, 4, 7],
  [0, 4, 6],
  [0, 5, 7],
  [0, 5, 6]
],
startbottom: [
  [0, 5, 5],
  [0, 5, 4],
  [1, 5, 5],
  [1, 5, 4],
  [2, 5, 5],
  [2, 5, 4],
  [3, 5, 5],
  [3, 5, 4],
  [4, 5, 5],
  [4, 5, 4],
  [5, 5, 5],
  [5, 5, 4]
],
startright: [
  [5, 0, 2],
  [5, 0, 3],
  [5, 1, 2],
  [5, 1, 3],
  [5, 2, 2],
  [5, 2, 3],
  [5, 3, 2],
  [5, 3, 3],
  [5, 4, 2],
  [5, 4, 3],
  [5, 5, 2],
  [5, 5, 3]
]
*/
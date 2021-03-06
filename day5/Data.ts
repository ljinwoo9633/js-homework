import Unit from './models/Unit';

let larvaDescription = '부화장, 번식지, 군락에서 자동으로 생성된다. 저그의 여왕에 의해 4기의 애벌레가 한 부화장에 추가될 수도 있다. 선택에 따라 각종 저그 유닛으로 변태한다.';
let queenDescription = '지상 다용도 방어 유닛이다. 전작에서는 공중 유닛이었으나 지상 유닛으로 바뀌었으며 다양한 능력들을 구사할 수 있다. 부화장에서 생산되고 산란못을 소유하고 있어야 생산할 수 있다. 점막 위로 올라가면 기동성이 많이 향상된다. 점막 종양(Creep Tumor), 애벌레 부화(Spawn Larva), 회복(Regeneration) 기술을 가지고 있다.'
let roachDescription = '지상 원거리 돌격 유닛이다. 출신 생물은 가작스 산지의 뛰어난 재생력을 지닌 유전 암호를 갖고 있는 잔타 민달팽이. 애벌레로부터 변이되고 바퀴 소굴을 소유하고 있어야 생산이 가능하다. 업그레이드 후 잠복 상태에서도 이동이 가능하고 잠복 상태에서 회복속도가 매우 빠르다. 유기 갑피와 신경 재구성, 땅굴 발톱 업그레이드가 적용될 수 있다. 최신형이나 특수 강화처리된 금속도 부식시켜버리는 산성 타액으로 공격하며 업그레이드를 마치면 회복력도 매우 뛰어나 쉽게 죽지 않게 되고 잠복 상태에서도 신속히 이동할 수 있기 때문에 기습전에 아주 유용하다. 기동성에 아깝지 않게 방어력도 튼튼하다.';
let hydraliskDescription = '지상과 공중을 공격하는 지상 원거리 공격 유닛이다. 바늘 등뼈를 발사해 공격한다. 애벌레로부터 변이되고 히드라리스크 굴을 소유하고 있어야 생산할 수 있다. 그러나 전작 스타크래프트에서와는 달리 러커로 변태할 수 없게 되었다.';
let corruptorDescription = '공중을 공격하는 공중 원거리 공격 유닛이다. 타락 능력을 통해 적이 20%만큼의 피해를 더 입게 할 수 있다. 애벌레로부터 변이되고 번식지를 소유해야 생산할 수 있다. 무리 군주로 변이될 수 있다.';

let larva = new Unit("Larva(Normal Unit)", 50, 0, 1, larvaDescription, "https://media1.tenor.com/images/d938075f6bfbea856d1389cd1cfdc174/tenor.gif?itemid=15200141");
let queen = new Unit("Queen(Normal Unit)", 150, 0, 2, queenDescription, "https://media1.tenor.com/images/726bead0cec2e14466c34d16d0336f08/tenor.gif?itemid=15200149");
let roach = new Unit("Roach(Normal Unit)", 75, 25, 2, roachDescription, "https://media1.tenor.com/images/1715386bc9842130bdc6ac16afaf2311/tenor.gif?itemid=15223396");
let hydralisk = new Unit("hydralisk(Normal Unit)", 100, 50, 2, hydraliskDescription, "https://media.tenor.com/images/b3d185a80f4418d4993f44a9389b811a/tenor.gif");
let corruptor = new Unit("corruptor(Normal Unit)", 150, 100, 2, corruptorDescription, "https://media.tenor.com/images/7a87931be8002e74f700ebde3c8fb9d0/tenor.gif");

export let ZergData = [
    larva,
    queen,
    roach,
    hydralisk,
    corruptor
];


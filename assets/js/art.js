(function () {
  const PALETTE = {
    K: '#2a101e',
    D: '#4a2135',
    W: '#8a3359',
    w: '#c05a85',
    G: '#e3a86f',
    g: '#f7d6a0',
    R: '#c2436d',
    r: '#e06990',
    B: '#5c82ad',
    b: '#8fb6dd',
    S: '#8a7b8a',
    s: '#e6d6de',
    M: '#35563f',
    m: '#6f9474',
    P: '#f7dce7',
    p: '#e6bcd0',
    N: '#fff3f7',
    O: '#e08a5b',
    Y: '#f5d98a',
    V: '#6d4a7d',
    C: '#a8d8dc',
    F: '#edb9a6',
    T: '#3f8d80'
  };

  const SPRITES = {
    pirate: {
      pixels: [
        '......KKKK......',
        '.....KDDDDK.....',
        '...KKDDDDDDKK...',
        '..KDDDDDDDDDDK..',
        '..KDGGGGGGGGDK..',
        '.KDDDDDDDDDDDDK.',
        '.KDFKKDFKKDFKDK.',
        '.KDFKKDFKKDFKDK.',
        '.KDDDDKKDDDDDDK.',
        '..KDDDDDDDDDDK..',
        '...KRRRRRRRRK...',
        '..KRRRGGGGRRRK..',
        '..KRRRGGGGRRRK..',
        '..KRRRRRRRRRRK..',
        '..KRWRRRRRRWRK..',
        '...KRRRRRRRRK...',
        '...KDDDDDDDDK...',
        '....KDDKKDDK....',
        '....KDD..DDK....',
        '....KKK..KKK....'
      ]
    },
    flag: {
      pixels: [
        '......D......',
        '......D......',
        '.KKKKKKKKKK..',
        '.KRRRRRRRWK..',
        '.KRNNNNNRWK..',
        '.KRNKNKNRWK..',
        '.KRNNNNNRWK..',
        '.KRKNNNKRWK..',
        '.KKKKKKKKKK..',
        '......D......',
        '......D......'
      ]
    },
    banner: {
      pixels: [
        'D..............D',
        'D..GGGGGGGGGG..D',
        'D.GRRRRRRRRRRG.D',
        'D.GRNNNNNNNNRG.D',
        'D.GRNRRKKRRNRG.D',
        'D.GRNNNNNNNNRG.D',
        'D.GRRRRRRRRRRG.D',
        'D..GGGGGGGGGG..D'
      ]
    },
    chest: {
      pixels: [
        '..DDDDDDDDDD..',
        '.DWWWWWWWWWWD.',
        'DWWGGGGGGGGWWD',
        'DWGgGGGGGGgGWD',
        'DDDDDDDDDDDDDD',
        'DWGGDDDDDDGGWD',
        'DWGGDGGGGDGGWD',
        'DWGGDGYGYDGGWD',
        'DWGGDGGGGDGGWD',
        'DWGGDDDDDDGGWD',
        'DWWWWWWWWWWWWD',
        '.DDDDDDDDDDDD.'
      ]
    },
    fort: {
      pixels: [
        '.S.S.S.S.S.S.',
        'SSSSSSSSSSSSS',
        'S.S.S.S.S.S.S',
        'SSSSSSSSSSSSS',
        'SSKKSSSSSSKKS',
        'SSKKSSSSSSKKS',
        'SSSSSSSSSSSSS',
        'SSSSDDDDSSSSS',
        'SSSSDKKDSSSSS',
        'SSSSDKKDSSSSS',
        'SSSSDKKDSSSSS',
        'WWWWWKKBWWWWW',
        'WWWWWWWWWWWWW',
        '.WWWWWWWWWWW.'
      ]
    },
    ship: {
      pixels: [
        '.......K........',
        '.......KR.......',
        '......KRK.......',
        '...NNNNRNNN.....',
        '..NNNNNRNNNN....',
        '..NNNNRNNNNN....',
        '...NNNRNNNN.....',
        '......R.........',
        'WWWWWWWWWWWWWWWW',
        '.WWWWWWWWWWWWWW.',
        '..WWWWWWWWWWWW..',
        '...BBBBBBBBBB...'
      ]
    },
    tree: {
      pixels: [
        '....mmm....',
        '..mmmmmmm..',
        '.mmmmmmmmm.',
        'mmmmmmmmmmm',
        '..mmmmmmm..',
        '.mmmmmmmmm.',
        'mmmmmmmmmmm',
        '....DDD....',
        '....DDD....',
        '....DDD....',
        '...DDDDD...'
      ]
    },
    mountain: {
      pixels: [
        '.......ss.......',
        '......ssss......',
        '.....ssNNss.....',
        '....SSSSSSSS....',
        '....SSSSSSSS....',
        '...SSSSSSSSSS...',
        '...SSSSSSSSSS...',
        '..SSSSSSSSSSSS..',
        '..SSSSSSSSSSSS..',
        '.SSSSSSSSSSSSSS.',
        'SSSSSSSSSSSSSSSS'
      ]
    },
    scroll: {
      pixels: [
        '..pppppppppp..',
        '.pPPPPPPPPPPp.',
        'pPNNNNNNNNNNPp',
        'pPNKKKKKKKKNPp',
        'pPNNNNNNNNNNPp',
        'pPNNNNNNNNNNPp',
        'pPNKKKKKKKKNPp',
        'pPNNNNNNNNNNPp',
        'pPNKKKKKKKKNPp',
        'pPNNNNNNNNNNPp',
        'pPPPPPPPPPPPPp',
        '.pppppppppppp.'
      ]
    },
    shield: {
      pixels: [
        '.GGGGGGGGGG.',
        'GSSSSSSSSSSG',
        'GSSGGGGGGSSG',
        'GSGGgGGgGGSG',
        'GSSGGGGGGSSG',
        'GSSSSSSSSSSG',
        '.GSSSSSSSSG.',
        '..GSSSSSSG..',
        '...GSSSSG...',
        '....GSSG....',
        '.....GG.....',
        '......G.....'
      ]
    },
    sword: {
      pixels: [
        '......s......',
        '.....sss.....',
        '.....sss.....',
        '.....sss.....',
        '.....sss.....',
        '.....sss.....',
        '.....sss.....',
        '...GGGGGGG...',
        '.....GDD.....',
        '.....GDD.....',
        '.....GDD.....',
        '....DDD......'
      ]
    },
    skull: {
      pixels: [
        '..NNNNNN..',
        '.NNNNNNNN.',
        'NNKKNNKKNN',
        'NNKKNNKKNN',
        'NNNNNNNNNN',
        '.NNKKKKNN.',
        '..NNKKNN..',
        '..NNNNNN..',
        '...NKKN...',
        '...NNNN...'
      ]
    },
    key: {
      pixels: [
        '...GGGG....',
        '..GG..GG...',
        '.GG....GG..',
        '.GG....GG..',
        '..GG..GG...',
        '...GGGG....',
        '....GG.....',
        '....GG.....',
        '....GGG....',
        '....GG.....',
        '....GGG....'
      ]
    },
    coin: {
      pixels: [
        '..GGGG..',
        '.GggggG.',
        'GggGGggG',
        'GgGggGgG',
        'GgGggGgG',
        'GggGGggG',
        '.GggggG.',
        '..GGGG..'
      ]
    },
    gem: {
      pixels: [
        '..CCCCCC..',
        '.CbbbbbbC.',
        'CbbCbbCbbC',
        'CbCCCbCCCb',
        '.CbCCCCbC.',
        '..CbCCbC..',
        '...CbbC...',
        '....CC....'
      ]
    },
    book: {
      pixels: [
        '..DDDDDDDD..',
        '.DRRRRRRRRD.',
        'DRPNNNNNNPRD',
        'DRPNNNNNNPRD',
        'DRPNNNNNNPRD',
        'DRPNNNNNNPRD',
        'DRPNNNNNNPRD',
        'DRPNNNNNNPRD',
        '.DGGGGGGGGD.',
        '..DDDDDDDD..'
      ]
    },
    trophy: {
      pixels: [
        'GGGGGGGGGGGG',
        'GggggggggggG',
        'GgGGggggGGgG',
        'GgGGggggGGgG',
        'GggggggggggG',
        '.GggggggggG.',
        '..GGggggGG..',
        '...GGggGG...',
        '....GGGG....',
        '.....GG.....',
        '...GGGGGG...',
        '..GGGGGGGG..'
      ]
    },
    map: {
      pixels: [
        '.pppppppppppp.',
        'pPNNNNNNNNNNPp',
        'pPNmNNNNNNNNPp',
        'pPNmmNNNKKNNPp',
        'pPNNmmNKKNNNPp',
        'pPNNNmMRRNNNPp',
        'pPNNNmMRRNNNPp',
        'pPNNNNNmNNNNPp',
        'pPNNNNNNmmNNPp',
        'pPPPPPPPPPPPPp',
        '.pppppppppppp.'
      ]
    },
    compass: {
      pixels: [
        '....GGGG....',
        '..GGggggGG..',
        '.GggNNNNggG.',
        'GggNNKKNNggG',
        'GgNKKRRKKNgG',
        'GgNKRggRKNgG',
        'GgNKRggRKNgG',
        'GgNKKRRKKNgG',
        'GggNNKKNNggG',
        '.GggNNNNggG.',
        '..GGggggGG..',
        '....GGGG....'
      ]
    },
    flask: {
      pixels: [
        '.....SS.....',
        '.....SS.....',
        '....SKKS....',
        '....KNNK....',
        '...KNTTNK...',
        '...KTTTTK...',
        '..KTTTTTTK..',
        '..KTTTTTTK..',
        '..KTTTTTTK..',
        '...KKKKKK...'
      ]
    },
    star: {
      pixels: [
        '....Y....',
        '....Y....',
        '..YXYXY..',
        '...YYY...',
        'YYYYYYYYY',
        '.YYYYYYY.',
        '..YYYYY..',
        '.YY...YY.'
      ]
    },
    cloud: {
      pixels: [
        '..NNNN.....',
        '.NNNNNN..NN',
        'NNNNNNNNNNN',
        '.NNNNNNNNN.'
      ]
    },
    flower: {
      pixels: [
        '..R.R..',
        '.RYRYR.',
        '..YYY..',
        '..YRY..',
        '...m...',
        '...m...'
      ]
    },
    campfire: {
      pixels: [
        '...O...',
        '..OYO..',
        '.OYYYYO.',
        '..OYO..',
        '.WWWWW.',
        'W.W.W.W'
      ]
    },
    cage: {
      pixels: [
        '.SSSSSSSS.',
        'S.S.S.S.S.S',
        'S.S.S.S.S.S',
        'SSSSSSSSSS',
        'S.SKKKK.S.S',
        'S.SKGGK.S.S',
        'S.SKKKK.S.S',
        'SSSSSSSSSS',
        '.SSSSSSSS.'
      ]
    },
    helm: {
      pixels: [
        '...SSSSSS...',
        '..SSSSSSSS..',
        '.SSSSSSSSSS.',
        'SSSSSSSSSSSS',
        'SSGGSSSSGGSS',
        'SSGGSSSSGGSS',
        'SSSSSSSSSSSS',
        '.SSSSSSSSSS.',
        '..SSSSSSSS..',
        '...KKKKKK...'
      ]
    },
    potion: {
      pixels: [
        '....NN....',
        '....NN....',
        '....SS....',
        '...SSSS...',
        '..SCCCCS..',
        '..SCVVCS..',
        '.SCVVVVCS.',
        '.SCVVVVCS.',
        '.SCCCCCCS.',
        '..SSSSSS..'
      ]
    }
  };

  function getDef(name) {
    const sprite = SPRITES[name] || SPRITES.scroll;
    const rows = sprite.pixels;
    const width = rows.reduce(function (max, row) { return Math.max(max, row.length); }, 0);
    return { width: width, height: rows.length, rows: rows };
  }

  function rectsFor(name) {
    const def = getDef(name);
    let out = '';
    def.rows.forEach(function (row, y) {
      for (let x = 0; x < row.length; x += 1) {
        const color = PALETTE[row[x]];
        if (color) {
          out += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + color + '"/>';
        }
      }
    });
    return out;
  }

  function spriteSVG(name, scale, className) {
    const def = getDef(name);
    const size = scale || 3;
    return '<svg class="pixel-sprite ' + (className || '') + '" viewBox="0 0 ' + def.width + ' ' + def.height +
      '" width="' + def.width * size + '" height="' + def.height * size +
      '" shape-rendering="crispEdges" aria-hidden="true" focusable="false">' + rectsFor(name) + '</svg>';
  }

  function embed(name, x, y, width, height) {
    const def = getDef(name);
    return '<svg x="' + x + '" y="' + y + '" width="' + width + '" height="' + height +
      '" viewBox="0 0 ' + def.width + ' ' + def.height + '" shape-rendering="crispEdges" preserveAspectRatio="xMidYMid meet">' +
      rectsFor(name) + '</svg>';
  }

  function rect(x, y, width, height, fill) {
    return '<rect x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" fill="' + fill + '"/>';
  }

  function cloud(x, y, s) {
    let out = '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">';
    out += rect(8, 0, 12, 4, '#fff7fb');
    out += rect(4, 4, 24, 4, '#fff7fb');
    out += rect(0, 8, 32, 4, '#fff3f7');
    out += rect(4, 12, 24, 2, '#e6bcd0');
    out += '</g>';
    return out;
  }

  function peak(cx, base, height, half, body, snow) {
    let out = '';
    for (let i = 0; i < height; i += 4) {
      const t = i / height;
      const w = Math.max(4, Math.round(half * 2 * t));
      out += rect(Math.round(cx - w / 2), base - i, w, 4, body);
    }
    out += rect(cx - 4, base - height, 8, 4, snow);
    out += rect(cx - 8, base - height + 4, 16, 4, snow);
    return out;
  }

  function tree(x, y, s) {
    let out = '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">';
    out += rect(6, 10, 4, 10, '#4a2135');
    out += rect(2, 2, 12, 6, '#6f9474');
    out += rect(0, 6, 16, 6, '#6f9474');
    out += rect(2, 10, 12, 4, '#35563f');
    out += rect(5, 4, 3, 3, '#9abf8a');
    out += '</g>';
    return out;
  }

  function grass(x, y) {
    return '<g transform="translate(' + x + ' ' + y + ')">' + rect(0, 2, 2, 4, '#35563f') +
      rect(3, 0, 2, 6, '#6f9474') + rect(6, 3, 2, 3, '#35563f') + '</g>';
  }

  function sceneSVG() {
    let s = '<svg class="pixel-scene" viewBox="0 0 320 180" shape-rendering="crispEdges" aria-label="Pixel art island with a fort, mountains, river, ship and treasure chest" role="img">';
    s += rect(0, 0, 320, 180, '#f7c8d8');
    s += rect(0, 0, 320, 24, '#f0b8cd');
    s += rect(264, 12, 20, 20, '#f7d6a0');
    s += rect(268, 8, 12, 28, '#f7d6a0');
    s += rect(260, 16, 28, 12, '#f7d6a0');
    s += rect(268, 16, 12, 12, '#fff0d0');
    s += cloud(18, 18, 1.4);
    s += cloud(150, 10, 1);
    s += cloud(210, 34, 0.8);
    s += peak(64, 106, 52, 34, '#8a7b8a', '#fff3f7');
    s += peak(112, 108, 38, 26, '#6b5e6b', '#f2e4ea');
    s += peak(168, 106, 46, 30, '#8a7b8a', '#fff3f7');
    s += rect(0, 104, 320, 8, '#6f9474');
    s += rect(0, 112, 320, 12, '#2f4a38');
    s += rect(0, 124, 320, 20, '#8a3359');
    s += rect(0, 144, 320, 36, '#4a2135');
    s += rect(0, 108, 320, 4, '#9abf8a');
    s += rect(214, 108, 30, 4, '#5c82ad');
    s += rect(220, 112, 30, 8, '#5c82ad');
    s += rect(228, 120, 34, 8, '#5c82ad');
    s += rect(236, 128, 40, 10, '#5c82ad');
    s += rect(246, 138, 74, 42, '#5c82ad');
    s += rect(246, 138, 74, 4, '#8fb6dd');
    s += rect(258, 148, 20, 2, '#8fb6dd');
    s += rect(292, 158, 18, 2, '#8fb6dd');
    s += rect(272, 170, 14, 2, '#8fb6dd');
    s += embed('fort', 132, 56, 76, 60);
    s += embed('flag', 158, 44, 24, 28);
    s += embed('tree', 24, 76, 40, 48);
    s += embed('tree', 62, 84, 32, 40);
    s += embed('tree', 244, 84, 28, 34);
    s += tree(92, 92, 1.1);
    s += tree(208, 90, 1);
    s += embed('chest', 46, 132, 48, 40);
    s += rect(94, 164, 6, 6, '#f7d6a0');
    s += rect(102, 160, 6, 6, '#f7d6a0');
    s += rect(110, 166, 6, 6, '#f7d6a0');
    s += embed('ship', 254, 112, 60, 46);
    for (let i = 0; i < 18; i += 1) {
      s += grass(i * 18 + 6, 150 + (i % 3) * 6);
    }
    s += embed('flower', 34, 156, 14, 20);
    s += embed('flower', 196, 152, 14, 20);
    s += embed('flower', 228, 164, 14, 20);
    s += rect(18, 40, 2, 2, '#2a101e');
    s += rect(22, 38, 2, 2, '#2a101e');
    s += rect(26, 42, 2, 2, '#2a101e');
    s += '</svg>';
    return s;
  }

  window.PIXEL_ART = {
    sprite: spriteSVG,
    scene: sceneSVG,
    names: Object.keys(SPRITES)
  };
})();

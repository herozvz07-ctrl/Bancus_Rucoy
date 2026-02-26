// ============================================
// ДАННЫЕ О МОБАХ (из оригинального приложения)
// ============================================

const mobs = [
    { mob_name: "Rat Lv.1", mob_defense: 4, mob_health: 25, mob_level: 1 },
    { mob_name: "Rat Lv.3", mob_defense: 7, mob_health: 35, mob_level: 3 },
    { mob_name: "Crow Lv.6", mob_defense: 13, mob_health: 40, mob_level: 6 },
    { mob_name: "Wolf Lv.9", mob_defense: 17, mob_health: 50, mob_level: 9 },
    { mob_name: "Scorpion Lv.12", mob_defense: 18, mob_health: 50, mob_level: 12 },
    { mob_name: "Cobra Lv.13", mob_defense: 18, mob_health: 50, mob_level: 13 },
    { mob_name: "Worm Lv.14", mob_defense: 19, mob_health: 55, mob_level: 14 },
    { mob_name: "Goblin Lv.15", mob_defense: 21, mob_health: 60, mob_level: 15 },
    { mob_name: "Mummy Lv.25", mob_defense: 36, mob_health: 80, mob_level: 25 },
    { mob_name: "Pharaoh Lv.35", mob_defense: 51, mob_health: 100, mob_level: 35 },
    { mob_name: "Assassin Lv.45", mob_defense: 71, mob_health: 120, mob_level: 45 },
    { mob_name: "Assassin Lv.50", mob_defense: 81, mob_health: 140, mob_level: 50 },
    { mob_name: "Assassin Ninja Lv.55", mob_defense: 91, mob_health: 160, mob_level: 55 },
    { mob_name: "Skeleton Archer Lv.80", mob_defense: 101, mob_health: 300, mob_level: 80 },
    { mob_name: "Zombie Lv.65", mob_defense: 106, mob_health: 200, mob_level: 65 },
    { mob_name: "Skeleton Lv.75", mob_defense: 121, mob_health: 300, mob_level: 75 },
    { mob_name: "Skeleton Warrior Lv.90", mob_defense: 146, mob_health: 375, mob_level: 90 },
    { mob_name: "Vampire Lv.100", mob_defense: 171, mob_health: 450, mob_level: 100 },
    { mob_name: "Vampire Lv.110", mob_defense: 186, mob_health: 530, mob_level: 110 },
    { mob_name: "Drow Ranger Lv.125", mob_defense: 191, mob_health: 600, mob_level: 125 },
    { mob_name: "Drow Mage Lv.130", mob_defense: 191, mob_health: 600, mob_level: 130 },
    { mob_name: "Drow Assassin Lv.120", mob_defense: 221, mob_health: 620, mob_level: 120 },
    { mob_name: "Drow Sorceress Lv.140", mob_defense: 221, mob_health: 600, mob_level: 140 },
    { mob_name: "Drow Fighter Lv.135", mob_defense: 246, mob_health: 680, mob_level: 135 },
    { mob_name: "Lizard Archer Lv.160", mob_defense: 271, mob_health: 650, mob_level: 160 },
    { mob_name: "Lizard Shaman Lv.170", mob_defense: 276, mob_health: 600, mob_level: 170 },
    { mob_name: "Dead Eyes Lv.170", mob_defense: 276, mob_health: 600, mob_level: 170 },
    { mob_name: "Lizard Warrior Lv.150", mob_defense: 301, mob_health: 680, mob_level: 150 },
    { mob_name: "Djinn Lv.150", mob_defense: 301, mob_health: 640, mob_level: 150 },
    { mob_name: "Lizard High Shaman Lv.190", mob_defense: 326, mob_health: 740, mob_level: 190 },
    { mob_name: "Gargoyle Lv.190", mob_defense: 326, mob_health: 740, mob_level: 190 },
    { mob_name: "Dragon Hatchling Lv.240", mob_defense: 331, mob_health: 10000, mob_level: 240 },
    { mob_name: "Lizard Captain Lv.180", mob_defense: 361, mob_health: 815, mob_level: 180 },
    { mob_name: "Dragon Lv.250", mob_defense: 501, mob_health: 20000, mob_level: 250 },
    { mob_name: "Minotaur Lv.225", mob_defense: 511, mob_health: 4250, mob_level: 225 },
    { mob_name: "Minotaur Lv.250", mob_defense: 601, mob_health: 5000, mob_level: 250 },
    { mob_name: "Dragon Warden Lv.280", mob_defense: 626, mob_health: 30000, mob_level: 280 },
    { mob_name: "Ice Elemental Lv.300", mob_defense: 676, mob_health: 40000, mob_level: 300 },
    { mob_name: "Minotaur Lv.275", mob_defense: 691, mob_health: 5750, mob_level: 275 },
    { mob_name: "Ice Dragon Lv.320", mob_defense: 726, mob_health: 45000, mob_level: 320 },
    { mob_name: "Yeti Lv.350", mob_defense: 826, mob_health: 55000, mob_level: 350 },
    { mob_name: "Lava Golem Lv.375", mob_defense: 900, mob_health: 65000, mob_level: 375 },
    { mob_name: "Orthrus Lv.400", mob_defense: 1300, mob_health: 75000, mob_level: 400 },
    { mob_name: "Demon Lv.450", mob_defense: 1550, mob_health: 100000, mob_level: 450 }
];

// ============================================
// ФОРМУЛЫ
// ============================================

const Formulas = {
    auto_min_raw_damage_Calc: (stat, weaponatk, base) => {
        return stat * weaponatk / 20 + base / 4;
    },

    auto_max_raw_damage_Calc: (stat, weaponatk, base) => {
        return stat * weaponatk / 10 + base / 4;
    },

    special_meldist_min_raw_damage_Calc: (stat, weaponatk, base) => {
        return 1.5 * (stat * weaponatk / 20 + base / 4);
    },

    special_meldist_max_raw_damage_Calc: (stat, weaponatk, base) => {
        return 1.5 * (stat * weaponatk / 10 + base / 4);
    },

    special_magic_min_raw_damage_Calc: (stat, weaponatk, base) => {
        return 1.5 * (1.08 * stat * weaponatk / 20 + 9 * base / 32);
    },

    special_magic_max_raw_damage_Calc: (stat, weaponatk, base) => {
        return 1.5 * (1.08 * stat * weaponatk / 10 + 9 * base / 32);
    },

    max_raw_crit_damage_Calc: (max_raw_damage, crit_ring) => {
        return crit_ring ? max_raw_damage * 1.075 : max_raw_damage * 1.05;
    },

    min_damage_Calc: (min_raw_damage, mobIndex) => {
        let min_damage = min_raw_damage - mobs[mobIndex].mob_defense;
        return min_damage < 0 ? 0 : min_damage;
    },

    max_damage_Calc: (max_raw_damage, mobIndex) => {
        return max_raw_damage - mobs[mobIndex].mob_defense;
    },

    max_crit_damage_Calc: (max_raw_crit_damage, mobIndex) => {
        return max_raw_crit_damage - mobs[mobIndex].mob_defense;
    },

    normal_accuracy_Calc: (max_raw_damage, min_raw_damage, mobIndex) => {
        let accuracy = (max_raw_damage - mobs[mobIndex].mob_defense) / (max_raw_damage - min_raw_damage);
        return accuracy > 1.0 ? 1.0 : accuracy;
    },

    crit_accuracy_Calc: (max_raw_crit_damage, max_raw_damage, mobIndex) => {
        let accuracy = (max_raw_crit_damage - mobs[mobIndex].mob_defense) / (max_raw_crit_damage - max_raw_damage);
        return accuracy > 1.0 ? 1.0 : accuracy;
    },

    accuracy_Calc: (max_raw_crit_damage, max_raw_damage, min_raw_damage, mobIndex, use_spiked_ring) => {
        const normal = Formulas.normal_accuracy_Calc(max_raw_damage, min_raw_damage, mobIndex);
        const crit = Formulas.crit_accuracy_Calc(max_raw_crit_damage, max_raw_damage, mobIndex);
        
        if (use_spiked_ring) {
            return normal * 0.99 + crit * 0.075;
        } else {
            return normal * 0.99 + crit * 0.01;
        }
    },

    average_damage_Calc: (accuracy, max_damage, min_damage, max_crit_damage, use_spiked_ring) => {
        if (use_spiked_ring) {
            return accuracy * (0.99 * ((max_damage + min_damage) / 2)) + 0.035 * ((max_crit_damage + max_damage) / 2);
        } else {
            return accuracy * (0.99 * ((max_damage + min_damage) / 2)) + 0.01 * ((max_crit_damage + max_damage) / 2);
        }
    },

    tickrate_Calc: (accuracy, maxtickrate) => {
        return maxtickrate * (1.0 - Math.pow(1.0 - accuracy, 10.0));
    },

    time_to_kill_Calc: (avgdmg, mobIndex) => {
        return mobs[mobIndex].mob_health / avgdmg;
    },

    threshold_Calc: (tick) => {
        return 1.0 - Math.pow(0.8251, 1.0 / tick);
    },

    total_accuracy_Calc: (accuracy, tick) => {
        return 1.0 - Math.pow(Math.pow(1.0 - accuracy, tick), 10.0);
    },

    max_tickrate_Calc: (tick) => {
        return tick <= 5 ? tick * 3600 : 18000;
    },

    powertickrate_Calc: (totalaccuracy, maxtickrate) => {
        return maxtickrate * totalaccuracy;
    },

    stat0to54_Calc: (stat) => {
        return Math.pow(stat, stat / 1000 + 2.373);
    },

    stat55to99_Calc: (stat) => {
        return Math.pow(stat, stat / 1000 + 2.171);
    },

    findStatLevel_Calc: (ticks) => {
        if (ticks <= Formulas.stat0to54_Calc(54)) {
            for (let stat = 5; stat <= 54; stat++) {
                if (ticks <= Formulas.stat0to54_Calc(stat)) {
                    const fract = (ticks - Formulas.stat0to54_Calc(stat - 1)) / 
                                  (Formulas.stat0to54_Calc(stat) - Formulas.stat0to54_Calc(stat - 1));
                    return stat - 1 + fract;
                }
            }
        } else {
            for (let stat = 55; stat <= 1000; stat++) {
                if (ticks <= Formulas.stat55to99_Calc(stat)) {
                    const fract = (ticks - Formulas.stat55to99_Calc(stat - 1)) / 
                                  (Formulas.stat55to99_Calc(stat) - Formulas.stat55to99_Calc(stat - 1));
                    return stat - 1 + fract;
                }
            }
        }
        return -1;
    },

    exp_Calc: (base) => {
        return Math.pow(base, base / 1000 + 3);
    }
};

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    populateMobSelects();
});

function populateMobSelects() {
    const sortedMobs = [...mobs].sort((a, b) => a.mob_level - b.mob_level);
    const selects = ['dmg-mob'];
    
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            sortedMobs.forEach((mob) => {
                const option = document.createElement('option');
                option.value = mobs.indexOf(mob);
                option.textContent = mob.mob_name;
                select.appendChild(option);
            });
        }
    });
}

function switchCalcTab(e, tabName) {
    document.querySelectorAll('.calc-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.calc-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const targetTab = document.getElementById(`calc-${tabName}-tab`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    e.target.classList.add('active');
}

// ============================================
// РАСЧЁТ УРОНА
// ============================================

function calculateDamage() {
    const base = parseFloat(document.getElementById('dmg-base').value);
    const stat = parseFloat(document.getElementById('dmg-stat').value);
    const weapon = parseFloat(document.getElementById('dmg-weapon').value);
    const atkType = parseInt(document.getElementById('dmg-atktype').value);
    const mobIndex = parseInt(document.getElementById('dmg-mob').value);
    const critRing = document.getElementById('dmg-crit-ring').checked;
    
    if (isNaN(base) || isNaN(stat) || isNaN(weapon)) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }
    
    let min_raw, max_raw;
    
    switch(atkType) {
        case 0:
            min_raw = Formulas.auto_min_raw_damage_Calc(stat, weapon, base);
            max_raw = Formulas.auto_max_raw_damage_Calc(stat, weapon, base);
            break;
        case 1:
        case 2:
            min_raw = Formulas.special_meldist_min_raw_damage_Calc(stat, weapon, base);
            max_raw = Formulas.special_meldist_max_raw_damage_Calc(stat, weapon, base);
            break;
        case 3:
            min_raw = Formulas.special_magic_min_raw_damage_Calc(stat, weapon, base);
            max_raw = Formulas.special_magic_max_raw_damage_Calc(stat, weapon, base);
            break;
    }
    
    const max_raw_crit = Formulas.max_raw_crit_damage_Calc(max_raw, critRing);
    const min_dmg = Formulas.min_damage_Calc(min_raw, mobIndex);
    const max_dmg = Formulas.max_damage_Calc(max_raw, mobIndex);
    const max_crit_dmg = Formulas.max_crit_damage_Calc(max_raw_crit, mobIndex);
    const normal_acc = Formulas.normal_accuracy_Calc(max_raw, min_raw, mobIndex);
    const crit_acc = Formulas.crit_accuracy_Calc(max_raw_crit, max_raw, mobIndex);
    const total_acc = Formulas.accuracy_Calc(max_raw_crit, max_raw, min_raw, mobIndex, critRing);
    const avg_dmg = Formulas.average_damage_Calc(total_acc, max_dmg, min_dmg, max_crit_dmg, critRing);
    
    const mob = mobs[mobIndex];
    const attackTypes = ['Auto attack', '⚔️ Special Melee', '🏹 Special Distance', '🪄 Special Magic'];
    
    let html = `
        <div class="result-title">
            <i class="fas fa-crosshairs"></i>
            Результаты расчёта урона: ${mob.mob_name}
        </div>
        
        <div class="result-grid">
            <div class="result-item">
                <label>Тип атаки</label>
                <div class="value">${attackTypes[atkType]}</div>
            </div>
            <div class="result-item ${min_dmg > 0 ? 'success' : 'danger'}">
                <label>⏬ Мин. урон</label>
                <div class="value">${min_dmg > 0 ? Math.floor(min_dmg) : 'Не пробивает'}</div>
            </div>
            <div class="result-item ${max_dmg > 0 ? 'success' : 'danger'}">
                <label>⏫ Макс. урон</label>
                <div class="value">${max_dmg > 0 ? Math.floor(max_dmg) : 'Не пробивает'}</div>
            </div>
            <div class="result-item ${max_crit_dmg > 0 ? 'warning' : 'danger'}">
                <label>🔥 Макс. крит урон</label>
                <div class="value">${max_crit_dmg > 0 ? Math.floor(max_crit_dmg) : 'Не пробивает'}</div>
            </div>
            <div class="result-item">
                <label>💪 Средний урон</label>
                <div class="value">${Math.floor(avg_dmg)}</div>
            </div>
            <div class="result-item">
                <label>Точность (обычная)</label>
                <div class="value">${(normal_acc * 100).toFixed(1)}%</div>
            </div>
            <div class="result-item">
                <label>Точность (крит)</label>
                <div class="value">${(crit_acc * 100).toFixed(1)}%</div>
            </div>
            <div class="result-item">
                <label>Общая точность</label>
                <div class="value">${(total_acc * 100).toFixed(1)}%</div>
            </div>
        </div>
        
        <div class="text-result">
            <strong>👾 Информация о мобе:</strong><br>
            HP: ${mob.mob_health} | Защита: ${mob.mob_defense}<br>
            <br>
            <strong>Сырой урон (без учёта защиты):</strong><br>
            Мин: ${Math.floor(min_raw)} | Макс: ${Math.floor(max_raw)} | Крит: ${Math.floor(max_raw_crit)}
        </div>
    `;
    
    const resultsDiv = document.getElementById('damage-results');
    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
}

// ============================================
// ONLINE TRAINING (из оригинального кода)
// ============================================

function calculateOnlineTraining() {
    const base = parseFloat(document.getElementById('online-base').value);
    const stat = parseFloat(document.getElementById('online-stat').value);
    const weapon = parseFloat(document.getElementById('online-weapon').value);
    const critRing = document.getElementById('online-crit-ring').checked;
    
    if (isNaN(base) || isNaN(stat) || isNaN(weapon)) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }
    
    const min_raw_damage = Formulas.auto_min_raw_damage_Calc(stat, weapon, base);
    const max_raw_damage = Formulas.auto_max_raw_damage_Calc(stat, weapon, base);
    const max_raw_crit_damage = Formulas.max_raw_crit_damage_Calc(max_raw_damage, critRing);
    
    let pos = 0;
    let accuracy = 0.0;
    
    // Ищем моба с точностью >= 0.1749 (из оригинального кода)
    for (let x = mobs.length - 1; x >= 0; x--) {
        // Пропускаем Dragon Hatchling (31) и Dragon (33)
        if (x === 26 || x === 31) continue;
        
        accuracy = Formulas.accuracy_Calc(max_raw_crit_damage, max_raw_damage, min_raw_damage, x, critRing);
        if (accuracy >= 0.1749) {
            pos = x;
            break;
        }
    }
    
    const min_damage = Formulas.min_damage_Calc(min_raw_damage, pos);
    const max_damage = Formulas.max_damage_Calc(max_raw_damage, pos);
    const max_crit_damage = Formulas.max_crit_damage_Calc(max_raw_crit_damage, pos);
    const avgdmg = Formulas.average_damage_Calc(accuracy, max_damage, min_damage, max_crit_damage, critRing);
    const tickrate = Formulas.tickrate_Calc(accuracy, 3600);
    const time = Formulas.time_to_kill_Calc(avgdmg, pos);
    
    // Проверяем возможность прокачки на 2 мобах (из оригинала)
    let onemob = true;
    if (pos === 5 || pos === 20 || pos === 22 || pos === 28 || pos === 30) {
        pos--;
        onemob = false;
    }
    
    let str0 = `👾 Вы можете эффективно тренироваться на <strong>${mobs[pos].mob_name}</strong>!`;
    
    if (!onemob && pos + 1 < mobs.length) {
        const time2 = Formulas.time_to_kill_Calc(avgdmg, pos + 1);
        str0 = `👾 Вы можете эффективно тренироваться на <strong>${mobs[pos].mob_name}</strong> & <strong>${mobs[pos + 1].mob_name}</strong>!<br><br>`;
        str0 += `⏱️ Среднее время убийства ${mobs[pos + 1].mob_name}: ${Math.floor(time2 / 60)} мин. ${Math.floor(time2 % 60)} сек.`;
    }
    
    // Расчёт следующего моба
    let newpos = pos + 1;
    while (newpos < mobs.length && (newpos === 26 || newpos === 31)) {
        newpos++;
    }
    
    const checknextmob = newpos < mobs.length;
    let statadd = 0;
    let alrdealdamage = false;
    let dealdamage = false;
    let newaccuracy = 0.0;
    
    if (checknextmob) {
        while (newaccuracy < 0.1749) {
            const statneeded = stat + statadd;
            const new_min_raw = Formulas.auto_min_raw_damage_Calc(statneeded, weapon, base);
            const new_max_raw = Formulas.auto_max_raw_damage_Calc(statneeded, weapon, base);
            const new_max_crit = Formulas.max_raw_crit_damage_Calc(new_max_raw, critRing);
            const new_max_dmg = Formulas.max_damage_Calc(new_max_raw, newpos);
            
            newaccuracy = Formulas.accuracy_Calc(new_max_crit, new_max_raw, new_min_raw, newpos, critRing);
            
            if (new_max_dmg >= 1 && !alrdealdamage) {
                str0 += `<br><br>💥 Вы можете наносить ${Math.floor(new_max_dmg)} макс. урона ${mobs[newpos].mob_name}!`;
                alrdealdamage = true;
            } else if (new_max_dmg > 1 && !alrdealdamage && !dealdamage) {
                str0 += `<br><br>💥 Вы можете наносить ${Math.floor(new_max_dmg)} макс. урона ${mobs[newpos].mob_name} через ${statadd} статов!`;
                dealdamage = true;
            }
            statadd++;
        }
    }
    
    let html = `
        <div class="result-title">
            <i class="fas fa-wifi"></i>
            Online Training — Результаты
        </div>
        
        <div class="alert success">
            <i class="fas fa-check-circle"></i>
            ${str0}
        </div>
        
        <div class="result-grid">
            <div class="result-item success">
                <label>👾 Моб для прокачки</label>
                <div class="value">${mobs[pos].mob_name}</div>
            </div>
            <div class="result-item">
                <label>⏫ Макс. урон</label>
                <div class="value">${Math.floor(max_damage)}</div>
            </div>
            <div class="result-item">
                <label>💫 Tickrate</label>
                <div class="value">${Math.floor(tickrate)} / 3600</div>
            </div>
            <div class="result-item warning">
                <label>⏱️ Время убийства</label>
                <div class="value">${Math.floor(time / 60)}м ${Math.floor(time % 60)}с</div>
            </div>
        </div>
        
        ${checknextmob ? `
        <div class="text-result">
            <strong>💪 Следующий моб:</strong><br>
            ${mobs[newpos].mob_name} — нужно ${statadd} доп. статов для эффективной прокачки
        </div>
        ` : ''}
    `;
    
    const resultsDiv = document.getElementById('online-results');
    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
}

// ============================================
// POWER TRAINING (из оригинального кода)
// ============================================

function calculatePowerTraining() {
    const base = parseFloat(document.getElementById('power-base').value);
    const stat = parseFloat(document.getElementById('power-stat').value);
    const weapon = parseFloat(document.getElementById('power-weapon').value);
    const classtype = parseInt(document.getElementById('power-class').value);
    const tick = parseFloat(document.getElementById('power-tick').value) || 4;
    const critRing = document.getElementById('power-crit-ring').checked;
    
    if (isNaN(base) || isNaN(stat) || isNaN(weapon)) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }
    
    let min_raw_damage, max_raw_damage;
    let classEmoji;
    
    if (classtype === 2) {
        min_raw_damage = Formulas.special_magic_min_raw_damage_Calc(stat, weapon, base);
        max_raw_damage = Formulas.special_magic_max_raw_damage_Calc(stat, weapon, base);
        classEmoji = "🪄 Magic";
    } else {
        min_raw_damage = Formulas.special_meldist_min_raw_damage_Calc(stat, weapon, base);
        max_raw_damage = Formulas.special_meldist_max_raw_damage_Calc(stat, weapon, base);
        classEmoji = classtype === 0 ? "⚔️ Melee" : "🏹 Distance";
    }
    
    const max_raw_crit_damage = Formulas.max_raw_crit_damage_Calc(max_raw_damage, critRing);
    const threshold = Formulas.threshold_Calc(tick);
    
    let pos = 0;
    let accuracy = 0.0;
    
    // Пропускаем мобов которые не подходят для power train
    const skipMobs = [13, 19, 20, 22, 24, 25, 26, 29, 31, 33, 36, 37];
    
    for (let x = mobs.length - 1; x >= 0; x--) {
        if (skipMobs.includes(x) || x >= 39) continue;
        
        accuracy = Formulas.accuracy_Calc(max_raw_crit_damage, max_raw_damage, min_raw_damage, x, critRing);
        if (accuracy >= threshold) {
            pos = x;
            break;
        }
    }
    
    const min_damage = Formulas.min_damage_Calc(min_raw_damage, pos);
    const max_damage = Formulas.max_damage_Calc(max_raw_damage, pos);
    const max_crit_damage = Formulas.max_crit_damage_Calc(max_raw_crit_damage, pos);
    const avgdmg = Formulas.average_damage_Calc(accuracy, max_damage, min_damage, max_crit_damage, critRing);
    const totalaccuracy = Formulas.total_accuracy_Calc(accuracy, tick);
    const maxtickrate = Formulas.max_tickrate_Calc(tick);
    const powertickrate = Formulas.powertickrate_Calc(totalaccuracy, maxtickrate);
    const time = Formulas.time_to_kill_Calc(avgdmg, pos);
    
    // Расчёт следующего моба
    let newpos = pos + 1;
    while (skipMobs.includes(newpos) || newpos >= 38) {
        if (newpos >= 38) {
            newpos = 38;
            break;
        }
        newpos++;
    }
    
    const checknextmob = pos !== 38;
    let statadd = 0;
    let alrdealdamage = false;
    let dealdamage = false;
    let newaccuracy = 0.0;
    
    let str0 = `🔥 Вы можете эффективно делать Power Train на ${classEmoji} по <strong>${mobs[pos].mob_name}</strong>!`;
    
    if (checknextmob) {
        while (newaccuracy < threshold) {
            const statneeded = stat + statadd;
            let new_min_raw, new_max_raw;
            
            if (classtype === 2) {
                new_min_raw = Formulas.special_magic_min_raw_damage_Calc(statneeded, weapon, base);
                new_max_raw = Formulas.special_magic_max_raw_damage_Calc(statneeded, weapon, base);
            } else {
                new_min_raw = Formulas.special_meldist_min_raw_damage_Calc(statneeded, weapon, base);
                new_max_raw = Formulas.special_meldist_max_raw_damage_Calc(statneeded, weapon, base);
            }
            
            const new_max_crit = Formulas.max_raw_crit_damage_Calc(new_max_raw, critRing);
            const new_max_dmg = Formulas.max_damage_Calc(new_max_raw, newpos);
            
            newaccuracy = Formulas.accuracy_Calc(new_max_crit, new_max_raw, new_min_raw, newpos, critRing);
            
            if (new_max_dmg >= 1 && !alrdealdamage) {
                str0 += `<br><br>💥 Вы можете наносить ${Math.floor(new_max_dmg)} макс. урона ${mobs[newpos].mob_name}!`;
                alrdealdamage = true;
            } else if (new_max_dmg > 1 && !alrdealdamage && !dealdamage) {
                str0 += `<br><br>💥 Вы можете наносить ${Math.floor(new_max_dmg)} макс. урона ${mobs[newpos].mob_name} через ${statadd} статов!`;
                dealdamage = true;
            }
            statadd++;
        }
    }
    
    let html = `
        <div class="result-title">
            <i class="fas fa-bolt"></i>
            Power Training — Результаты
        </div>
        
        <div class="alert warning">
            <i class="fas fa-fire"></i>
            ${str0}
        </div>
        
        <div class="result-grid">
            <div class="result-item success">
                <label>👾 Моб для Power Train</label>
                <div class="value">${mobs[pos].mob_name}</div>
            </div>
            <div class="result-item">
                <label>🎯 Класс</label>
                <div class="value">${classEmoji}</div>
            </div>
            <div class="result-item">
                <label>⏫ Макс. урон</label>
                <div class="value">${Math.floor(max_damage)}</div>
            </div>
            <div class="result-item warning">
                <label>💫 Tickrate</label>
                <div class="value">${Math.floor(powertickrate)} / ${Math.floor(maxtickrate)}</div>
            </div>
            <div class="result-item">
                <label>⏱️ Время убийства</label>
                <div class="value">${Math.floor(time / 60)}м ${Math.floor(time % 60)}с</div>
            </div>
            <div class="result-item">
                <label>🎲 Tick</label>
                <div class="value">${tick} мобов</div>
            </div>
        </div>
        
        ${checknextmob ? `
        <div class="text-result">
            <strong>💪 Следующий моб:</strong><br>
            ${mobs[newpos].mob_name} — нужно ${statadd} доп. статов для эффективного Power Train
        </div>
        ` : ''}
    `;
    
    const resultsDiv = document.getElementById('power-results');
    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
}

// ============================================
// OFFLINE TRAINING (из оригинального кода)
// ============================================

function calculateOfflineTraining() {
    const current = parseFloat(document.getElementById('offline-current').value);
    const goal = parseFloat(document.getElementById('offline-goal').value);
    const hours = parseFloat(document.getElementById('offline-hours').value);
    
    if (isNaN(current)) {
        alert('Пожалуйста, укажите текущий стат!');
        return;
    }
    
    let html = '';
    
    // Если указана цель
    if (!isNaN(goal) && goal > 0 && (isNaN(hours) || hours <= 0)) {
        if (current > goal) {
            html = `
                <div class="alert danger">
                    <i class="fas fa-times-circle"></i>
                    ❗ Целевой стат должен быть больше текущего!
                </div>
            `;
        } else {
            let ticks1, ticks2;
            
            if (current <= 54) {
                ticks1 = Formulas.stat0to54_Calc(current);
            } else {
                ticks1 = Formulas.stat55to99_Calc(current);
            }
            
            if (goal <= 54) {
                ticks2 = Formulas.stat0to54_Calc(goal);
            } else {
                ticks2 = Formulas.stat55to99_Calc(goal);
            }
            
            const totalticks = ticks2 - ticks1;
            const totalMinutes = totalticks * 60 / 600;
            const totalHours = totalticks / 600;
            
            html = `
                <div class="result-title">
                    <i class="fas fa-clock"></i>
                    Offline Training: ${Math.floor(current)} → ${Math.floor(goal)}
                </div>
                
                <div class="result-grid">
                    <div class="result-item warning">
                        <label>💫 Необходимо тиков</label>
                        <div class="value">${Math.floor(totalticks).toLocaleString()}</div>
                    </div>
                    <div class="result-item">
                        <label>⏱️ Минут</label>
                        <div class="value">${Math.floor(totalMinutes).toLocaleString()}</div>
                    </div>
                    <div class="result-item success">
                        <label>⏰ Часов</label>
                        <div class="value">${totalHours.toFixed(1)}</div>
                    </div>
                </div>
                
                <div class="text-result">
                    <strong>📊 Сводка:</strong><br>
                    При скорости 600 опыта/час вам потребуется:<br>
                    • <strong>${Math.floor(totalMinutes).toLocaleString()} минут</strong> или <strong>${totalHours.toFixed(1)} часов</strong><br>
                    • Всего тиков: <strong>${Math.floor(totalticks).toLocaleString()}</strong>
                </div>
            `;
        }
    }
    // Если указаны часы
    else if (!isNaN(hours) && hours > 0 && (isNaN(goal) || goal <= 0)) {
        const tickstrained = 600 * hours;
        let ticks1;
        
        if (current <= 54) {
            ticks1 = Formulas.stat0to54_Calc(current);
        } else {
            ticks1 = Formulas.stat55to99_Calc(current);
        }
        
        const ticks2 = tickstrained + ticks1;
        const newStat = Math.round(100 * Formulas.findStatLevel_Calc(ticks2)) / 100;
        
        if (newStat < 5) {
            html = `
                <div class="alert danger">
                    <i class="fas fa-times-circle"></i>
                    ❌ Ошибка: Не удалось рассчитать новый стат!
                </div>
            `;
        } else {
            html = `
                <div class="result-title">
                    <i class="fas fa-clock"></i>
                    Offline Training: Результат
                </div>
                
                <div class="alert success">
                    <i class="fas fa-check-circle"></i>
                    <strong>💪 Ваш новый стат будет примерно: ${Math.floor(newStat)}</strong><br>
                    после ${hours} часов offline training (600 опыта/час)
                </div>
                
                <div class="result-grid">
                    <div class="result-item">
                        <label>Текущий стат</label>
                        <div class="value">${Math.floor(current)}</div>
                    </div>
                    <div class="result-item success">
                        <label>Новый стат</label>
                        <div class="value">${Math.floor(newStat)}</div>
                    </div>
                    <div class="result-item warning">
                        <label>Прибавка</label>
                        <div class="value">+${Math.floor(newStat - current)}</div>
                    </div>
                    <div class="result-item">
                        <label>Часов тренировки</label>
                        <div class="value">${hours}</div>
                    </div>
                </div>
            `;
        }
    }
    // Ошибка: заполнено либо оба, либо ничего
    else {
        html = `
            <div class="alert danger">
                <i class="fas fa-exclamation-triangle"></i>
                ❗ Заполните ЛИБО целевой стат, ЛИБО часы (не оба сразу)!
            </div>
        `;
    }
    
    const resultsDiv = document.getElementById('offline-results');
    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
}

// ============================================
// SKULL CALCULATOR (из оригинального кода)
// ============================================

function calculateSkull() {
    const base = parseFloat(document.getElementById('skull-base').value);
    
    if (isNaN(base) || base < 1) {
        alert('Пожалуйста, укажите уровень базы!');
        return;
    }
    
    const hp = 100 + base * 15;
    const mp = 100 + base * 10;
    const currentExp = Formulas.exp_Calc(base);
    const nextLevelExp = Formulas.exp_Calc(base + 1);
    const expNeeded = nextLevelExp - currentExp;
    
    // Черепа (из оригинального кода)
    const whiteSkull = { needed: base * 150, lost: base * 50 };
    const yellowSkull = { needed: base * 150, lost: base * 150 };
    const orangeSkull = { needed: base * 600, lost: base * 450 };
    const redSkull = { needed: base * 1950, lost: base * 1350 };
    const blackSkull = { needed: base * 6000, lost: base * 4050 };
    
    let html = `
        <div class="result-title">
            <i class="fas fa-skull"></i>
            Характеристики персонажа — Уровень ${Math.floor(base)}
        </div>
        
        <div class="result-grid">
            <div class="result-item success">
                <label>❤️ HP</label>
                <div class="value">${Math.floor(hp)}</div>
            </div>
            <div class="result-item" style="border-left-color: #3498db;">
                <label>🪄 MP</label>
                <div class="value">${Math.floor(mp)}</div>
            </div>
            <div class="result-item warning">
                <label>✨ Текущий опыт</label>
                <div class="value">${Math.floor(currentExp).toLocaleString()}</div>
            </div>
            <div class="result-item">
                <label>🎯 До след. уровня</label>
                <div class="value">${Math.floor(expNeeded).toLocaleString()}</div>
            </div>
        </div>
        
        <div class="text-result">
            <strong style="color: white;">⚪ White Skull:</strong><br>
            Нужно: ${Math.floor(whiteSkull.needed).toLocaleString()} gold | Потеряете: ${Math.floor(whiteSkull.lost).toLocaleString()} gold
            <br><br>
            
            <strong style="color: #f1c40f;">🟡 Yellow Skull:</strong><br>
            Нужно: ${Math.floor(yellowSkull.needed).toLocaleString()} gold | Потеряете: ${Math.floor(yellowSkull.lost).toLocaleString()} gold
            <br><br>
            
            <strong style="color: #e67e22;">🟠 Orange Skull:</strong><br>
            Нужно: ${Math.floor(orangeSkull.needed).toLocaleString()} gold | Потеряете: ${Math.floor(orangeSkull.lost).toLocaleString()} gold
            <br><br>
            
            <strong style="color: #e74c3c;">🔴 Red Skull:</strong><br>
            Нужно: ${Math.floor(redSkull.needed).toLocaleString()} gold | Потеряете: ${Math.floor(redSkull.lost).toLocaleString()} gold
            <br><br>
            
            <strong style="color: #2c3e50;">⚫ Black Skull:</strong><br>
            Нужно: ${Math.floor(blackSkull.needed).toLocaleString()} gold | Потеряете: ${Math.floor(blackSkull.lost).toLocaleString()} gold
        </div>
    `;
    
    const resultsDiv = document.getElementById('skull-results');
    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
}

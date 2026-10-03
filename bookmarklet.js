(async () => {
  const e = "sister25778_snapshots",
    t = "sister25778_focus",
    a = [
      "cd9c987f-d87d-4a91-84d5-c7b5d2c922ee",
      "ec816dd4-905e-436d-9bad-8342b653c06d",
      "05335f5d-fde7-4dd0-a630-78c81ca9c99c",
      "ca7e77ab-4139-4a20-8b17-67662ce79d02",
      "e17439eb-1d5e-46eb-81be-7fb6036ff2f5",
      "c691dadd-c50d-4752-8789-eaf0f58ffa64",
      "36e02a3a-faca-4c4f-8d61-6b2667a08068",
      "e4cecdcc-3d8b-4038-8e89-5b717126cf9c",
      "b961dbf8-6207-4a60-a752-5a05ff22095a",
      "29273e41-84b5-4309-9225-0b3c8c26bed7",
      "f4f636c7-f64f-4fe7-851f-e630f3bf8896",
      "8813ecbc-fd0f-4812-b89f-ee7de90495d6",
      "19eaa30b-9f4c-4910-90ad-34ea964d09c4",
      "61a58914-c0d3-46e3-aef8-b86f7838937a",
      "e09cf3ec-2295-4a1b-ae83-d9a34615cca5",
      "aedb367a-677d-45fc-a6cc-a20104ee54dc",
      "8a8f773d-791e-43a0-805f-d3db5b58bc88",
      "1464bd38-5931-4645-b045-cb2015a74092",
      "429a8d94-facc-41d9-a1fa-5311e82fbd83",
      "b3058a80-1f1f-4c64-8392-bd2f0fa94f6c",
      "2fd746fd-56e4-4698-902d-39c2090e868a",
      "0935cb56-9add-4383-a5a4-3299979cb3c1",
      "857caa94-14c3-453e-846a-cdb24077be74",
      "998fe7cf-497f-4931-9ff0-ca22f192eaa3",
      "032adacf-fc60-4376-845b-1cf6a052466b",
      "57c7f76e-ce8b-4bc2-bbbb-358974f246db",
      "44cce211-cd14-41d7-93c3-d69494f718ff",
      "5d186df7-27f4-478a-8580-322503a58e9a",
      "10fbeb47-f1ef-470a-a8fa-ba1dc977b7b3",
      "afe8f71d-8815-4b74-883f-6c877dbe7c28",
      "6e009d11-03d2-4b35-ab57-2c2c7602d7dd",
      "9efadb25-e259-4f65-9b53-2c994fb20bec",
      "de994b8a-d756-4b10-a9c3-62328b780ce4",
      "9e0810c9-bc70-475b-ba14-162e67d4efc7",
      "fd5e1f1c-fa1b-4748-8b02-5fd6963692c1",
      "274951cc-9e17-4256-b5f1-579b1388eb2c",
      "cbdb1390-ce17-44b1-8246-3fc4fc72d32c",
      "13c70033-c028-4ed3-8ed9-84d8947dc089",
      "444d9f95-faa6-466d-a2e7-ab419be694cc",
      "2e296031-37ee-42c5-ade6-ed9bf06eda2f",
    ],
    d = [
      "小玉",
      "Yuetching627",
      "哇系阿璇",
      "小菜kristar",
      "LyXi",
      "百軒Miya",
      "七依",
      "Nikki_tzu.yu",
      "切里Cherry",
      "可鹽可甜Bona",
      "李柒柒77",
      "Yuni",
      "吉拿Daily",
      "奈奈大王",
      "程茵",
      "IRENE",
      "陳玉婷yuting",
      "恩玖",
      "gii_0520",
      "蘿拉Laura",
      "布丁Purin",
      "凡妮莎莎Vanessa",
      "Tinana",
      "小李子Yoni",
      "mei.mei0601",
      "ycyc_1010",
      "e.mmmilk_",
      "玟玟來啦",
      "kapo6744",
      "jieyuuuuu_",
      "soyun257",
      "悠悠",
      "群群Chunni",
      "Mina6627",
      "Elsa.0104_",
      "琪Qiyana",
      "沛沛bae",
      "Yoyo老師",
      "珈珈出沒",
      "iam豫晴兒",
    ],
    c = [
      50, 47, 44, 41, 38, 35, 33, 31, 29, 27, 25, 24, 23, 22, 21, 20, 19, 18,
      17, 16, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 4, 3, 3, 2, 2, 1, 1,
    ],
    o = document.getElementById("sister-rank-panel");
  o && o.remove();
  const n = {
      get(e, t) {
        try {
          const a = localStorage.getItem(e);
          return a ? JSON.parse(a) : t;
        } catch (e) {
          return t;
        }
      },
      set(e, t) {
        try {
          localStorage.setItem(e, JSON.stringify(t));
        } catch (e) {}
      },
    },
    s = (e) => e.toLocaleString("en-US"),
    i = new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Taipei" }),
    f = document.createElement("div");
  (f.id = "sister-rank-panel"),
    (f.style.cssText =
      'position:fixed;top:16px;right:16px;z-index:2147483647;width:440px;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);display:flex;flex-direction:column;background:#fff;color:#1a1a1a;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.25);font:13px/1.4 -apple-system,"Noto Sans TC","Microsoft JhengHei",sans-serif;overflow:hidden'),
    (f.innerHTML =
      '<div style="padding:12px 14px;background:#0b1e3a;color:#fff;display:flex;align-items:center;gap:8px"><b style="flex:1;font-size:15px">可莉女孩應援榜・票數排名</b><button data-a="refresh" style="all:unset;cursor:pointer;padding:2px 8px;border:1px solid #fff6;border-radius:6px">重新整理</button><button data-a="close" style="all:unset;cursor:pointer;font-size:18px;padding:0 4px">×</button></div><div data-r="status" style="padding:8px 14px;color:#555;border-bottom:1px solid #eee">讀取中…</div><div data-r="body" style="overflow:auto;flex:1"></div><div style="padding:8px 14px;border-top:1px solid #eee;display:flex;gap:8px;align-items:center;color:#777;font-size:12px"><span style="flex:1">點任一列可設為關注對象</span><button data-a="csv" style="all:unset;cursor:pointer;color:#0b5cd6">匯出歷史 CSV</button></div>'),
    document.body.appendChild(f);
  const r = (e) => f.querySelector(e);
  async function l() {
    r("[data-r=status]").textContent = "讀取中…";
    const o = await Promise.all(
      a.map((e) =>
        fetch(
          "https://fireant.17app.co/api/v1/public/containers/" + e + "/summary",
          { cache: "no-store" },
        )
          .then((e) => e.json())
          .then((e) => e.total || 0)
          .catch(() => null),
      ),
    );
    if (o.some((e) => null === e))
      return void (r("[data-r=status]").textContent =
        "部分資料讀取失敗，請按重新整理");
    const f = n.get(e, {});
    (f[i] = { t: Date.now(), v: o }), n.set(e, f);
    const l = Object.keys(f)
        .filter((e) => e < i)
        .sort()
        .pop(),
      b = l ? f[l].v : null,
      p = (e) => {
        const t = e.map((e, t) => t).sort((t, a) => e[a] - e[t] || t - a),
          a = [];
        return t.forEach((e, t) => (a[e] = t + 1)), a;
      },
      x = p(o),
      u = b ? p(b) : null,
      y = n.get(t, 28),
      g = o.map((e, t) => t).sort((e, t) => o[t] - o[e] || e - t),
      h = new Date().toLocaleTimeString("zh-TW", {
        hour12: !1,
        timeZone: "Asia/Taipei",
      });
    r("[data-r=status]").innerHTML =
      "更新於 " +
      i +
      " " +
      h +
      (l
        ? "　比較基準：" + l + " 最後一次快照"
        : "　（明天再開就能看到每日變化）");
    let m =
      '<table style="width:100%;border-collapse:collapse"><thead><tr style="position:sticky;top:0;background:#f5f7fa;color:#555;text-align:right"><th style="padding:6px 8px;text-align:center">名次</th><th style="padding:6px;text-align:left">號碼・名稱</th><th style="padding:6px">票數</th>' +
      (b ? '<th style="padding:6px">較前日</th>' : "") +
      '<th style="padding:6px 10px 6px 6px">積分</th></tr></thead><tbody>';
    g.forEach((e, t) => {
      const a = e + 1,
        n = a === y;
      let i = "";
      if (u) {
        const t = u[e] - x[e];
        i =
          t > 0
            ? '<span style="color:#d93025"> ▲' + t + "</span>"
            : t < 0
              ? '<span style="color:#188038"> ▼' + -t + "</span>"
              : "";
      }
      const f = t > 0 ? o[g[t - 1]] - o[e] : 0;
      m +=
        '<tr data-n="' +
        a +
        '" style="cursor:pointer;border-bottom:1px solid #f0f0f0;' +
        (n ? "background:#fff4c2;font-weight:600" : "") +
        '"><td style="padding:6px 8px;text-align:center;white-space:nowrap">' +
        (t + 1) +
        i +
        '</td><td style="padding:6px">' +
        a +
        " 號　" +
        d[e] +
        (n && t > 0
          ? '<div style="font-weight:400;color:#888;font-size:11px">距上一名 ' +
            s(f) +
            " 票</div>"
          : "") +
        '</td><td style="padding:6px;text-align:right">' +
        s(o[e]) +
        "</td>" +
        (b
          ? '<td style="padding:6px;text-align:right;color:#0b5cd6">+' +
            s(o[e] - b[e]) +
            "</td>"
          : "") +
        '<td style="padding:6px 10px 6px 6px;text-align:right">' +
        c[t] +
        "</td></tr>";
    }),
      (r("[data-r=body]").innerHTML = m + "</tbody></table>");
  }
  f.addEventListener("click", (a) => {
    const c = a.target.closest("[data-a]");
    if (c) {
      if (
        ("close" === c.dataset.a && f.remove(),
        "refresh" === c.dataset.a && l(),
        "csv" === c.dataset.a)
      ) {
        const t = n.get(e, {}),
          a = Object.keys(t).sort();
        let c = "\ufeff號碼,名稱," + a.join(",") + "\n";
        d.forEach((e, d) => {
          c +=
            d + 1 + ',"' + e + '",' + a.map((e) => t[e].v[d]).join(",") + "\n";
        });
        const o = document.createElement("a");
        (o.href = URL.createObjectURL(new Blob([c], { type: "text/csv" }))),
          (o.download = "sister_votes_" + i + ".csv"),
          o.click();
      }
      return;
    }
    const o = a.target.closest("tr[data-n]");
    o && (n.set(t, +o.dataset.n), l());
  }),
    l();
})();

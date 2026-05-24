import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Microscope, Newspaper, GraduationCap, ArrowRight, X, Link2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ============================================================
// 🔶 EDITABLE COPY / 可修改文案区域 1：页面通用文字
// 这里主要修改：实验室名称、院系、导航栏、首页介绍、成员介绍、联系方式等 gaigaigaigai
// en = 英文页面文字；zh = 中文页面文字
// ============================================================
const content = {
  en: {
    labName: "Yao Lab",
    department: "Yao University · Department of Xiang",
    nav: {
      research: "Research",
      people: "People",
      publications: "Publications",
      contact: "Contact"
    },
    hero: {
      title: "Yao Lab",
      pi: "Principal Investigator: Dr. Xiang Yao",
      intro:
        "We study reproductive biology, immune-metabolic regulation, and tissue remodeling through interdisciplinary experimental and analytical approaches.",
      researchButton: "Explore our research",
      joinButton: "Join us"
    },
    research: {
      label: "Research",
      title: "Research areas",
      intro:
        "We study immune-metabolic changes associated with pregnancy, childbirth, and lactation. We also investigate physiological and behavioral adaptation processes under academic stress conditions, including post-stress recovery dynamics and the social propagation of burnout-related behaviors."
    },
    people: {
      label: "People",
      title: "Lab members",
      intro:
        "The Yao Lab brings together researchers working on immune-metabolic adaptation, post-exam recovery dynamics, social burnout propagation, deadline-associated behavioral instability, and high-intensity academic survival strategies.",
      piRole: "Principal Investigator",
      piBio:
        "Reproductive biology · immune-metabolic adaptation · deadline-induced physiological instability"
    },
    publications: {
      label: "Publications",
      title: "Selected publications",
      button: "View all publications"
    },
    opportunities: {
      label: "Opportunities",
      title: "Join the lab",
      intro:
        "We welcome students and researchers interested in immune-metabolic adaptation, burnout dynamics, post-exam recovery biology, chronic sleep deprivation, and emotionally unstable collaborative environments.",
      introExtra: "Only one letter of recommendation required.",
      openPositions: "Open positions",
      openPositionsText:
        "The Yao Lab is currently recruiting highly resilient master’s students, PhD students, postdoctoral fellows, research assistants, and emotionally stable collaborators. Prior experience in deadline survival, caffeine-dependent productivity, group-chat crisis management, or emergency slide production is strongly preferred."
    },
    contact: {
      title: "Contact",
      email: "Email",
      address: "Address",
      addressText: "Department, University, City, Country"
    },
    footer: {
      copyright: "© 2026 Yao Lab. All rights reserved.",
      design: "Designed for academic research communication."
    }
  },
  zh: {
    labName: "姚想实验室",
    department: "中国姚大学 · 想学院",
    nav: {
      research: "研究方向",
      people: "成员",
      publications: "论文",
      contact: "联系方式"
    },
    hero: {
      title: "姚想实验室",
      pi: "课题组负责人：姚想 博士",
      intro:
        "我们通过跨学科的实验与分析方法，研究生殖生物学、免疫代谢调控以及组织重塑过程。",
      researchButton: "了解研究",
      joinButton: "加入我们"
    },
    research: {
      label: "研究",
      title: "主要研究方向",
      intro:
        "我们研究与妊娠、分娩和哺乳相关的免疫代谢变化。我们也关注学术压力状态下的生理与行为适应过程，包括压力后的恢复动力学以及耗竭相关行为在社交环境中的传播机制。"
    },
    people: {
      label: "成员",
      title: "实验室成员",
      intro:
        "姚实验室汇聚了关注免疫代谢适应、考后恢复动力学、社交耗竭传播、截止日期行为失稳以及高强度学术生存策略的研究人员。",
      piRole: "课题组负责人",
      piBio: "生殖生物学 · 免疫代谢适应 · 截止日期诱导的生理失稳"
    },
    publications: {
      label: "论文",
      title: "代表性论文",
      button: "查看全部论文"
    },
    opportunities: {
      label: "机会",
      title: "加入我们",
      intro:
        "我们欢迎对免疫代谢适应、burnout 动力学、考后恢复生物学、慢性缺觉以及情绪不稳定型合作环境感兴趣的学生与研究人员加入。",
      introExtra: "只需要一封推荐信。",
      openPositions: "开放职位",
      openPositionsText:
        "姚实验室现招收高韧性硕士生、博士生、博士后、科研助理以及情绪稳定的合作研究人员。有截止日期生存经验、咖啡因依赖型生产力、群聊危机处理能力或紧急赶 PPT 能力者优先。"
    },
    contact: {
      title: "联系方式",
      email: "邮箱",
      address: "地址",
      addressText: "院系，大学，城市，国家"
    },
    footer: {
      copyright: "© 2026 姚想实验室。保留所有权利。",
      design: "用于学术研究交流。"
    }
  }
};

// ============================================================
// 🔶 EDITABLE COPY / 可修改文案区域 2：研究方向
// 这里修改 Research cards：研究方向标题和说明文字
// 想增加研究方向：复制一个 {...} 区块，放在数组里即可
// 想减少研究方向：删除对应的 {...} 区块即可
// ============================================================
const researchAreas = [
  {
    title: {
      en: "Immune-metabolic changes after pregnancy and lactation",
      zh: "妊娠、生产与哺乳后的免疫代谢变化"
    },
    desc: {
      en:
        "We investigate how pregnancy, childbirth, and lactation reshape women’s immune and metabolic states, with the goal of understanding long-term physiological adaptation and health.",
      zh:
        "我们研究女性在怀孕、分娩和哺乳后，免疫状态与代谢状态如何发生改变，并探索这些变化与长期生理适应和健康之间的关系。"
    }
  },
  {
    title: {
      en: "Post-exam Recovery Dynamics",
      zh: "考后恢复动力学"
    },
    desc: {
      en:
        "We investigate the multi-stage recovery processes that occur following periods of intense academic exertion, focusing on sleep compensation, emotional stabilization, metabolic restoration, and temporary loss of temporal awareness.",
      zh:
        "我们研究高强度学术活动结束后的多阶段恢复过程，重点关注睡眠补偿、情绪稳定、代谢恢复以及阶段性时间感知丧失等现象。"
    }
  },
  {
    title: {
      en: "Socially Transmitted Burnout",
      zh: "社交传播型 Burnout"
    },
    desc: {
      en:
        "We examine how burnout-related behaviors, emotional exhaustion, and motivational decline propagate through social and academic networks, with emphasis on collective stress amplification within collaborative environments.",
      zh:
        "我们研究 burnout 相关行为、情绪耗竭以及动力下降如何在社交与学术网络中传播，并重点关注合作环境中的集体压力放大效应。"
    }
  }
];

// ============================================================
// 🔶 EDITABLE COPY / 可修改文案区域 3：代表性论文
// 这里修改论文标题、期刊年份、英文说明、中文说明
// ============================================================
const publications = [
  {
    title: "Immune-metabolic Instability Following Consecutive Deadline Exposure",
    journal: "Nature Human Stress, 2025",
    desc: {
      en: "This study identified acute metabolic disruption and temporary circadian collapse in graduate students exposed to three or more consecutive deadlines.",
      zh: "本研究发现，连续经历三个及以上截止日期的研究生会出现急性代谢紊乱与阶段性昼夜节律崩溃。"
    }
  },
  {
    title: "Social Propagation of Burnout within Collaborative Research Networks",
    journal: "Cell Reports: Academic Systems, 2024",
    desc: {
      en: "Using longitudinal group-chat analysis, we demonstrated that emotional exhaustion propagates rapidly through highly interconnected laboratory environments.",
      zh: "通过长期群聊行为分析，我们发现情绪耗竭会在高度互联的实验室环境中快速传播。"
    }
  },
  {
    title: "Post-exam Recovery Dynamics and Sleep Compensation Mechanisms",
    journal: "Journal of Translational Recovery Biology, 2026",
    desc: {
      en: "This work characterized the multi-stage recovery trajectory following final examinations, including sleep rebound, emotional stabilization, and temporary loss of temporal awareness.",
      zh: "本研究系统描述了期末考试后的多阶段恢复轨迹，包括睡眠反弹、情绪稳定以及阶段性时间感知丧失。"
    }
  }
];
const activities = [
  { image: "/activity1.jpg", title: "Susi Party", desc: "Description here." },
  { image: "/activity2.jpg", title: "海外旅行", desc: "description" },
  { image: "/activity3.jpg", title: "露营烧烤", desc: "可以吃到铱星食物“yy烤串”" },
  { image: "/activity4.jpg", title: "深夜饮酒活动", desc: "注意姚导不定期养鱼 和姚导喝酒要盯住酒杯" },
  { image: "/activity5.JPG", title: "实验室常驻活动：分手厨房", desc: "三星是我们的底线 全部四星是我们的追求 厨房高手快来加入YAO LAB" },
  { image: "/activity6.jpg", title: "实验室常驻活动2：🌟", desc: "全场消费meng买单 心动吗 快来加入YAO LAB（姚导因不会钓鱼遗憾失去买单资格）" },
  { image: "/activity7.jpg", title: "与姚导共舞活动", desc: "Description here." },
  { image: "/activity8.jpg", title: "海外旅行2", desc: "Description here." },
  { image: "/activity9.jpg", title: "和导师约会", desc: "我在东京很想姚老师" },
  { image: "/activity10.jpg", title: "和导师牵手", desc: "对的我就是在夹带私货" },
];

// ============================================================
// 🔶 EDITABLE COPY / 可修改文案区域 4：实验室成员
// 这里修改每个人的头像、名字、年级、研究兴趣和详细介绍
// image 对应 public 文件夹里的图片，例如 public/member-1.png
// ============================================================
const members = [
  {
    name: { en: "Sherry Xiong", zh: "熊师" },
    role: { en: "Co-Principal Investigator", zh: "合作课题组负责人" },
    year: { en: "", zh: "" },
    image: "/xiong.jpg",
    interests: {
      en: ["Collective burnout amplification", "collaborative stress systems", "post-meeting recovery mechanisms"],
      zh: ["集体 burnout 放大效应", "协作压力系统", "组会后恢复机制"]
    },
    bio: {
      en: ["Collective burnout amplification", "collaborative stress systems", "post-meeting recovery mechanisms"],
      zh: ["集体 burnout 放大效应", "协作压力系统", "组会后恢复机制"]
    }
  },
  {
    name: { en: "MJ", zh: "毛尖" },
    role: { en: "Distinguished Research Fellow", zh: "特聘研究员" },
    year: { en: "", zh: "" },
    image: "/maojian.jpg",
    interests: {
      en: ["Circadian nap optimization", "snack surveillance systems"],
      zh: ["昼夜节律睡眠优化", "零食监测系统"]
    },
    bio: {
      en: ["Circadian nap optimization", "snack surveillance systems"],
      zh: ["昼夜节律睡眠优化", "零食监测系统"]
    }
  },
  {
    name: { en: "Yoki", zh: "钢蛋" },
    role: { en: "Distinguished Research Fellow", zh: "特聘研究员" },
    year: { en: "", zh: "" },
    image: "/gangdan.jpg",
    interests: {
      en: ["Cat-assisted emotional regulation", "translational meow biology"],
      zh: ["猫源性情绪调控", "喵学转化研究"]
    },
    bio: {
      en: ["Cat-assisted emotional regulation", "translational meow biology"],
      zh: ["猫源性情绪调控", "喵学转化研究"]
    }
  },
  {
    name: { en: "Freya Zheng", zh: "正西门" },
    role: { en: "Laboratory Administrator", zh: "实验室管理员" },
    year: { en: "", zh: "" },
    image: "/meng.jpg",
    interests: {
      en: ["Administrative crisis management", "emergency deadline reconstruction", "interdisciplinary chaos coordination"],
      zh: ["行政危机管理", "紧急 ddl 修复", "跨学科混乱协调"]
    },
    bio: {
      en: ["Administrative crisis management", "emergency deadline reconstruction", "interdisciplinary chaos coordination"],
      zh: ["行政危机管理", "紧急 ddl 修复", "跨学科混乱协调"]
    }
  },
  {
    name: { en: "Asuka", zh: "大闸蟹" },
    role: { en: "PhD Student", zh: "博士生" },
    year: { en: "", zh: "" },
    image: "/dzx.JPG",
    interests: {
      en: ["Socially transmitted burnout", "emotional exhaustion propagation", "caffeine-mediated resilience"],
      zh: ["社交传播型 burnout", "情绪耗竭传播", "咖啡因介导韧性机制"]
    },
    bio: {
      en: ["Socially transmitted burnout", "emotional exhaustion propagation", "caffeine-mediated resilience"],
      zh: ["社交传播型 burnout", "情绪耗竭传播", "咖啡因介导韧性机制"]
    }
  },
  {
    name: { en: "Leah", zh: "歪歪" },
    role: { en: "PhD Student", zh: "博士生" },
    year: { en: "", zh: "" },
    image: "/yy.JPG",
    interests: {
      en: ["Chronic procrastination syndrome", "last-minute productivity bursts", "temporal awareness loss"],
      zh: ["慢性拖延综合征", "临时性生产力爆发", "时间感知丧失机制"]
    },
    bio: {
      en: ["Chronic procrastination syndrome", "last-minute productivity bursts", "temporal awareness loss"],
      zh: ["慢性拖延综合征", "临时性生产力爆发", "时间感知丧失机制"]
    }
  }
];

// ============================================================
// ⚠️ 页面结构区域：一般不用改
// 如果只是改网页文案，主要改上面的 EDITABLE COPY 区域即可
// ============================================================
export default function YaoLabHomepage() {
  const [lang, setLang] = useState("en");
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const t = content[lang];
  const isZh = lang === "zh";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-tight">{t.labName}</div>
          <div className="flex items-center gap-5">
            <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
              <a href="#research" className="hover:text-slate-950">{t.nav.research}</a>
              <a href="#people" className="hover:text-slate-950">{t.nav.people}</a>
              <a href="#publications" className="hover:text-slate-950">{t.nav.publications}</a>
              <a href="#contact" className="hover:text-slate-950">{t.nav.contact}</a>
            </nav>
            <div className="flex rounded-full border border-slate-200 bg-slate-100 p-1 text-sm">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 transition ${lang === "en" ? "bg-white font-semibold text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}
              >
                English
              </button>
              <button
                onClick={() => setLang("zh")}
                className={`rounded-full px-3 py-1 transition ${lang === "zh" ? "bg-white font-semibold text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pt-[28rem] pb-10 md:grid-cols-[1.1fr_0.9fr] md:items-center" style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('/back1.jpg')", backgroundSize: "cover", backgroundPosition: "top"}}>
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              {t.department}
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 text-xl font-medium text-slate-700">
              {t.hero.pi}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {t.hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                className="rounded-2xl px-5 py-6"
                onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.researchButton} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-2xl px-5 py-6"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.joinButton}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] bg-white p-4 shadow-xl"
          >
            <div className="aspect-[4/2] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <img
                src="/yao-lab-photo.png" // 🔶 EDITABLE IMAGE / 可替换图片：把 public 文件夹里的图片改名为 yao-lab-photo.png，或修改这里的文件名
                alt="Dr. Xiang Yao in the Yao Lab"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        <section id="research" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.research.label}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{t.research.title}</h2>
              <p className="mt-4 text-slate-600">
                {t.research.intro}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {researchAreas.map((area) => (
                <Card key={area.title.en} className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                      <Microscope className="h-6 w-6 text-slate-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{area.title[lang]}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{area.desc[lang]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="people" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.people.label}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{t.people.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  {t.people.intro}
                </p>
              </div>

              <Card className="rounded-3xl bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-3xl bg-slate-200">
                    <img
                      src="/yao.png"
                      alt="Dr. Xiang Yao"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{isZh ? "姚想 博士" : "Dr. Xiang Yao"}</h3>
                  <p className="mt-1 text-sm text-slate-500">{t.people.piRole}</p>
                  <p className="mt-4 leading-7 text-slate-600">
                    {t.people.piBio}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {members.map((member) => (
                <button
                  key={member.name.en}
                  onClick={() => setSelectedMember(member)}
                  className="group text-left"
                >
                  <Card className="h-full rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-5 h-20 w-20 overflow-hidden rounded-3xl bg-slate-200 ring-2 ring-transparent transition group-hover:ring-slate-300">
                        <img
                          src={member.image}
                          alt={member.name[lang]}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>

                      <h3 className="text-xl font-semibold text-slate-900">{member.name[lang]}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {member.role[lang]}
                      </p>

                      <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                        {member.interests[lang].map((interest, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="mt-0.5 shrink-0 text-slate-400">•</span>
                            <span>{interest}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section id="activities" className="py-20">
  <div className="mx-auto max-w-6xl px-6">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{isZh ? "活动" : "Activities"}</p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{isZh ? "实验室活动" : "Lab Activities"}</h2>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {activities.map((activity, i) => (
        <button
          key={i}
          onClick={() => setSelectedActivity(activity)}
          className="group relative overflow-hidden rounded-3xl aspect-square bg-slate-200"
        >
          <img
            src={activity.image}
            alt={activity.title}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        </button>
      ))}
    </div>
    <div className="mt-12 text-center">
  <p className="text-lg text-slate-500">{isZh ? "更多精彩活动，等你一起加入！" : "More exciting activities await — come join us!"}</p>
</div>
  </div>

  {selectedActivity && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0">
          <img src={selectedActivity.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        </div>
        <div className="relative p-8">
          <button
            onClick={() => setSelectedActivity(null)}
            className="absolute right-5 top-5 rounded-full bg-white/80 p-2 text-slate-500 hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="text-2xl font-bold">{selectedActivity.title}</h3>
          <p className="mt-4 leading-7 text-slate-700">{selectedActivity.desc}</p>
        </div>
      </motion.div>
    </div>
  )}
</section>

        <section id="publications" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.publications.label}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{t.publications.title}</h2>
              </div>
              <Button variant="outline" className="rounded-2xl">{t.publications.button}</Button>
            </div>
            <div className="mt-10 grid gap-5">
              {publications.map((paper) => (
                <Card key={paper.title} className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="flex gap-4 p-6">
                    <Newspaper className="mt-1 h-6 w-6 shrink-0 text-slate-500" />
                    <div>
                      <h3 className="text-lg font-semibold">{paper.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{paper.journal}</p>
                      <p className="mt-3 leading-7 text-slate-600">{paper.desc[lang]}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">{t.opportunities.label}</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{t.opportunities.title}</h2>
                  <p className="mt-4 leading-7 text-slate-300">
                    {t.opportunities.intro}
                  </p>
                  <p className="mt-2 leading-7 text-slate-300">
                    <strong>{t.opportunities.introExtra}</strong>
                  </p>
                </div>
                <div className="rounded-3xl bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6" />
                    <p className="font-semibold">{t.opportunities.openPositions}</p>
                  </div>
                  <p className="mt-4 text-slate-300">
                    {t.opportunities.openPositionsText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold tracking-tight">{t.contact.title}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card className="rounded-3xl shadow-sm">
                <CardContent className="flex gap-4 p-6">
                  <Mail className="h-6 w-6 text-slate-500" />
                  <div>
                    <p className="font-semibold">{t.contact.email}</p>
                    <p className="mt-1 text-slate-600">yao@example.edu</p> {/* 🔶 EDITABLE COPY / 可修改邮箱 */}
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-3xl shadow-sm">
              <CardContent className="flex gap-4 p-6">
                <Link2 className="h-6 w-6 text-slate-500" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a href="https://linkedin.com/in/xiang-yao-55a295289" target="_blank" className="mt-1 text-slate-600 hover:text-slate-900">
                    linkedin.com/in/xiang-yao-55a295289
                  </a>
                </div>
              </CardContent>
            </Card>
              <Card className="rounded-3xl shadow-sm">
                <CardContent className="flex gap-4 p-6">
                  <MapPin className="h-6 w-6 text-slate-500" />
                  <div>
                    <p className="font-semibold">{t.contact.address}</p>
                    <p className="mt-1 text-slate-600">{t.contact.addressText}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="relative w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
              aria-label="Close member profile"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="h-32 w-32 shrink-0 overflow-hidden rounded-3xl bg-slate-200">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name[lang]}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="pr-8">
                <h3 className="text-2xl font-bold tracking-tight">{selectedMember.name[lang]}</h3>
                <p className="mt-2 text-slate-500">{selectedMember.role[lang]} · {selectedMember.year[lang]}</p>
                <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-500">{isZh ? "研究兴趣" : "Research interests"}</p>
                  <div className="mt-3 space-y-2 text-slate-700">
                    {selectedMember.interests[lang].map((interest, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm leading-6">
                        <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                        <span>{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  {selectedMember.bio[lang].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 leading-7 text-slate-600">
                      <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <footer className="border-t bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.design}</p>
        </div>
      </footer>
    </div>
  );
}

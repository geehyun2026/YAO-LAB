import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Microscope, Newspaper, GraduationCap, ArrowRight, X } from "lucide-react";
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
        "We focus on reproductive biology and women’s health, especially the immune-metabolic and tissue-level changes associated with pregnancy, childbirth, lactation, and uterine remodeling."
    },
    people: {
      label: "People",
      title: "Lab members",
      intro:
        "The Yao Lab brings together researchers interested in reproductive biology, immunology, metabolism, and tissue remodeling.",
      piRole: "Principal Investigator",
      piBio:
        "Add a short bio, research interests, education, and selected achievements here."
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
        "We welcome motivated students and researchers interested in reproductive biology, women’s health, immunology, metabolism, and tissue remodeling.",
      openPositions: "Open positions",
      openPositionsText:
        "Add current recruitment information here: master’s students, PhD students, postdocs, research assistants, or collaborators."
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
        "我们关注生殖生物学与女性健康，尤其是妊娠、分娩、哺乳及子宫重塑过程中发生的免疫代谢变化和组织层面的动态调控。"
    },
    people: {
      label: "成员",
      title: "实验室成员",
      intro:
        "姚实验室汇聚关注生殖生物学、免疫学、代谢调控与组织重塑的研究人员。",
      piRole: "课题组负责人",
      piBio: "这里可以加入个人简介、研究兴趣、教育经历以及代表性成果。"
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
        "我们欢迎对生殖生物学、女性健康、免疫学、代谢调控和组织重塑感兴趣的学生与研究人员加入。",
      openPositions: "开放职位",
      openPositionsText:
        "这里可以添加当前招生与招聘信息，例如硕士生、博士生、博士后、研究助理或合作研究机会。"
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
      en: "Uterine remodeling",
      zh: "子宫重塑"
    },
    desc: {
      en:
        "We study the dynamic remodeling of the uterus across reproductive stages, focusing on how tissue structure, cellular states, and local immune-metabolic environments are coordinated during physiological adaptation.",
      zh:
        "我们关注子宫在不同生殖阶段发生的动态重塑，研究组织结构、细胞状态以及局部免疫代谢环境如何协同变化。"
    }
  },
  {
    title: {
      en: "Research theme 3",
      zh: "研究方向 3"
    },
    desc: {
      en:
        "Add another core research direction here, such as reproductive immunology, maternal health, tissue regeneration, or disease-related mechanisms.",
      zh:
        "这里可以加入第三个研究方向，例如生殖免疫、母体健康、组织再生，或与疾病相关的调控机制。"
    }
  }
];

// ============================================================
// 🔶 EDITABLE COPY / 可修改文案区域 3：代表性论文
// 这里修改论文标题、期刊年份、英文说明、中文说明
// ============================================================
const publications = [
  {
    title: "Replace with selected recent publication title",
    journal: "Journal Name, Year",
    desc: {
      en: "A short one-sentence summary of the main finding or method.",
      zh: "用一句中文简要说明这篇论文的主要发现或研究方法。"
    }
  },
  {
    title: "Replace with another representative publication",
    journal: "Journal Name, Year",
    desc: {
      en: "Briefly explain why this work matters to the field.",
      zh: "简要说明这项工作对相关研究领域的重要性。"
    }
  },
  {
    title: "Replace with review or collaborative work",
    journal: "Journal Name, Year",
    desc: {
      en: "Use this space for collaborative, interdisciplinary, or high-impact work.",
      zh: "这里可以放综述、合作研究，或具有代表性的高影响力工作。"
    }
  }
];

// ============================================================
// 🔶 EDITABLE COPY / 可修改文案区域 4：实验室成员
// 这里修改每个人的头像、名字、年级、研究兴趣和详细介绍
// image 对应 public 文件夹里的图片，例如 public/member-1.png
// ============================================================
const members = [
  {
    name: { en: "Graduate Student 1", zh: "研究生 1" },
    role: { en: "Graduate Student", zh: "研究生" },
    year: { en: "Year 1", zh: "一年级" },
    image: "/member-1.png",
    interests: {
      en: "Reproductive biology, immune-metabolic regulation",
      zh: "生殖生物学、免疫代谢调控"
    },
    bio: {
      en: "Add a short introduction here, including research interests, background, current project, and hobbies if desired.",
      zh: "这里可以加入个人简介，包括研究兴趣、学习背景、目前项目，以及想展示的兴趣爱好。"
    }
  },
  {
    name: { en: "Graduate Student 2", zh: "研究生 2" },
    role: { en: "Graduate Student", zh: "研究生" },
    year: { en: "Year 1", zh: "一年级" },
    image: "/member-2.png",
    interests: {
      en: "Uterine remodeling, tissue adaptation",
      zh: "子宫重塑、组织适应"
    },
    bio: {
      en: "Add a short introduction here, including research interests, background, current project, and hobbies if desired.",
      zh: "这里可以加入个人简介，包括研究兴趣、学习背景、目前项目，以及想展示的兴趣爱好。"
    }
  },
  {
    name: { en: "Graduate Student 3", zh: "研究生 3" },
    role: { en: "Graduate Student", zh: "研究生" },
    year: { en: "Year 1", zh: "一年级" },
    image: "/member-3.png",
    interests: {
      en: "Women’s health, reproductive immunology",
      zh: "女性健康、生殖免疫"
    },
    bio: {
      en: "Add a short introduction here, including research interests, background, current project, and hobbies if desired.",
      zh: "这里可以加入个人简介，包括研究兴趣、学习背景、目前项目，以及想展示的兴趣爱好。"
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
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center" style={{backgroundImage: "url('/back1.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
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
            <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100">
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
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.people.label}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{t.people.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  {t.people.intro}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="rounded-3xl bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 h-24 w-24 overflow-hidden rounded-3xl bg-slate-200">
                      <img
                        src="/yao-lab-photo.png"
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
                <div className="grid gap-4">
                  {members.map((member) => (
                    <button
                      key={member.name.en}
                      onClick={() => setSelectedMember(member)}
                      className="group text-left"
                    >
                      <Card className="rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <CardContent className="flex items-center gap-4 p-5">
                          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-slate-200 ring-2 ring-transparent transition group-hover:ring-slate-300">
                            <img
                              src={member.image}
                              alt={member.name[lang]}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{member.name[lang]}</p>
                            <p className="mt-1 text-sm text-slate-500">{member.role[lang]} · {member.year[lang]}</p>
                            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{member.interests[lang]}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
                  <p className="mt-2 leading-7 text-slate-700">{selectedMember.interests[lang]}</p>
                </div>
                <p className="mt-5 leading-7 text-slate-600">{selectedMember.bio[lang]}</p>
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


import {
  LocateIcon,
  PaintbrushVerticalIcon,
  Clock,
  Hash,
  Grid2x2,
  Images,
  MousePointerClick,
  Zap,
  Type,
  AlignJustify,
  BarChart2,
} from "lucide-react";

import { lazy, Suspense } from "react";
import { Theme } from "../components/Theme";
import { ClockTimer } from "../components/ClockTimer";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { Accordion } from "../components/Accordion";
import { ProgressBar } from "../components/ProgressBar";
import { ImageCarousel } from "../components/ImageCarousel";
import { ButtonCard } from "../components/ButtonCard";
import { ReactionGame } from "../components/ReactionGame";
import { Wordle } from "../components/Wordle";
import { TicTacToe } from "../components/TicTacToe";
import { Smile, Music, FileText, LayoutList, CalendarDays } from "lucide-react";
import { EmojiMood } from "../components/EmojiMood";
import { AmbientSound } from "../components/AmbientSound";
import { MarkdownPreviewer } from "../components/MarkdownPreviewer";
import { DragDrop } from "../components/DragDrop";
import { Calendar } from "../components/Calendar";

const MyLeafletMap = lazy(() => import("../components/Map"));

const cards = [
  {
    icon: LocateIcon,
    title: "Location",
    component: (
      <Suspense
        fallback={
          <div className="text-xs text-muted-foreground">Loading map...</div>
        }
      >
        <MyLeafletMap />
      </Suspense>
    ),
  },
  { icon: PaintbrushVerticalIcon, title: "Theme", component: <Theme /> },
  { icon: Clock, title: "Live Clock", component: <ClockTimer /> },
  { icon: Hash, title: "Counter Animation", component: <AnimatedCounter /> },
  { icon: AlignJustify, title: "Accordion", component: <Accordion /> },
  { icon: BarChart2, title: "Skill Bars", component: <ProgressBar /> },
  { icon: Images, title: "Carousel", component: <ImageCarousel /> },
  { icon: MousePointerClick, title: "Button", component: <ButtonCard /> },
  { icon: Zap, title: "Reaction", component: <ReactionGame /> },
  { icon: Type, title: "Wordle", component: <Wordle /> },
  { icon: Grid2x2, title: "Tic Tac Toe", component: <TicTacToe /> },
  { icon: Smile, title: "Mood", component: <EmojiMood /> },
  { icon: Music, title: "Ambient", component: <AmbientSound /> },
  { icon: FileText, title: "Markdown", component: <MarkdownPreviewer /> },
  { icon: LayoutList, title: "Drag & Drop", component: <DragDrop /> },
  { icon: CalendarDays, title: "Calendar", component: <Calendar /> },
];

export const Home = () => {
  return (
    <section id="home" className="py-32 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-8 relative z-10">
        {/* INTRO */}
        <div className="glass rounded-lg p-6 mb-8 animate-fade-in animate-delay-100">
          <div className="mb-4">
            <span className="text-primary text-2xl font-regular tracking-wider uppercase">
              Simple{" "}
              <span className="text-foreground glow-text">Components</span>
            </span>
          </div>
          <p className="text-muted-foreground">
            Hello! Thank you for checking out this repository! This is a space where
            I experiment with small, reusable components that can be added to
            the browser. Here I test ideas like a theme picker, interactive
            maps, and other simple UI features. The goal is to explore different
            concepts, improve my development workflow, and gradually build a
            collection of useful components. More experiments and additions will
            be coming in the future.
          </p>
        </div>

        {/* COMPONENTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in animate-delay-200">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-lg flex flex-col gap-4 min-h-52"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <h3 className="text-sm uppercase flex items-center gap-2 text-muted-foreground">
                <card.icon className="w-4 h-4 text-primary" />
                {card.title}
              </h3>
              <div className="flex-1">{card.component}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12 container flex justify-center mx-auto px-6">
        <div>
          <p className="text-sm text-muted-foreground m-auto">
            Thankyou for checking this out!
          </p>
        </div>
      </div>
    </section>
  );
};

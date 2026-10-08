# حَسَن Documentary | Hasan Documentary

A 30-second cinematic Remotion documentary project with RTL Arabic typography, film grain aesthetics, and documentary-style motion graphics.

## 📋 Project Specifications

- **Framework**: Remotion (React + TypeScript)
- **Resolution**: 1920x1080 (16:9)
- **Frame Rate**: 30 fps
- **Duration**: 30 seconds (900 frames)
- **Style**: Realistic, calm, cinematic documentary with Ken Burns zoom/pan effects
- **Typography**: RTL Arabic with Noto Sans Arabic font stack

## 📁 Project Structure

```
HASSAN-Aleppo/
├── src/
│   ├── index.ts                 # Entry point
│   ├── Root.tsx                 # Composition root
│   ├── Composition.tsx          # Main video assembly with audio
│   ├── types.ts                 # TypeScript interfaces
│   └── components/
│       ├── FilmGrain.tsx        # Vignette, letterbox, color grading
│       ├── Scene1.tsx           # Title scene (0-7s)
│       ├── Scene2.tsx           # Struggle & striving (7-15s)
│       ├── Scene3.tsx           # Ambition & persistence (15-24s)
│       └── Scene4.tsx           # Closing climax (24-30s)
├── public/
│   ├── images/                  # Scene background assets
│   └── audio/                   # Audio track
├── tsconfig.json                # TypeScript configuration
├── remotion.config.ts           # Remotion configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🎬 Scene Breakdown

### Scene 1: Title (0-7s | Frames 0-210)
- **Text**: حَسَن (Hasan)
- **Subtitle**: ملامح رجل يبحث عن بداية جديدة
- **Camera**: Ken Burns zoom-in fade from black
- **Aesthetic**: Gold/white glow text on dark gradient

### Scene 2: Struggle & Striving (7-15s | Frames 210-450)
- **Text**: بين ثقل الأيام والظروف... يولد الإصرار على تغيير مجرى الحياة
- **Camera**: Slow horizontal pan with contrast lighting
- **Aesthetic**: Dark warm tones with horizontal movement

### Scene 3: Ambition & Persistence (15-24s | Frames 450-720)
- **Badges**: طموح | تفكير | عمل | استمرار
- **Quote**: الطموح لا يتحقق بالأمنيات، بل بخطوات راسخة وسعي لا يهدأ
- **Camera**: Slow push-in with warm ambient lighting
- **Aesthetic**: Centered composition with glowing badges

### Scene 4: Closing Climax (24-30s | Frames 720-900)
- **Quote**: الحكاية لسا ما خلصت.
- **Sub-text**: رحلة حسن مستمرة...
- **Camera**: Slow pull-back fade to black
- **Aesthetic**: Emotional close-up with gentle fade-out

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Preview

Start the Remotion preview server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Render to MP4

```bash
npm run build
```

The final video will be saved to `out/hasan_documentary.mp4`.

### Fast Render (VP8 codec)

```bash
npm run build:fast
```

## 🎨 Style & Design

- **Letterbox**: 60px black bars top and bottom
- **Vignette**: Radial gradient darkening edges
- **Color Grading**: Warm warm-gold accent tones with cool shadows
- **Typography**: RTL Arabic with soft text shadows and glows
- **Motion**: Subtle Ken Burns, camera pans, and push-in/pull-back effects
- **Audio**: Fade-in and fade-out volume curves over 30s

## 📝 Audio Setup

Place your audio file at `public/audio/hasan-documentary.mp3` (or generate one).

### Generate placeholder audio (Python):

```python
import wave, math, struct

sample_rate = 44100
seconds = 30
amplitude = 0.3

with wave.open("public/audio/hasan-documentary.wav", "wb") as wav:
    wav.setnchannels(1)
    wav.setsampwidth(2)
    wav.setframerate(sample_rate)
    frames = []
    for i in range(sample_rate * seconds):
        t = i / sample_rate
        freq = 220 + 20 * math.sin(2 * math.pi * 0.1 * t)
        sample = int(amplitude * 32767 * math.sin(2 * math.pi * freq * t))
        frames.append(struct.pack("<h", sample))
    wav.writeframes(b"".join(frames))
```

Convert to MP3 with ffmpeg:

```bash
ffmpeg -i public/audio/hasan-documentary.wav -codec:a libmp3lame public/audio/hasan-documentary.mp3
```

## 🔧 Technologies

- **Remotion**: React-based video rendering library
- **React**: UI and component composition
- **TypeScript**: Type-safe development
- **CSS-in-JS**: Inline style animations

## 📜 License

MIT License - Feel free to modify and use for your projects.

## 👤 Author

Created as a documentary tribute project.

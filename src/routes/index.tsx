import { Title } from "solid-start";

export default function Home() {
  return (
    <main class="kart-home">
      <Title>Mini Kart</Title>
      <section class="kart-card">
        <h1>🏁 Mini Kart Oyunu</h1>
        <p>
          Oyun artık bağımsız bir <code>public/mario-kart/index.html</code> dosyasında.
          Böylece npm bağımlılıklarına takılmadan localhost'ta açabilirsin.
        </p>
        <div class="links">
          <a href="/mario-kart/index.html" target="_blank" rel="noreferrer">
            Oyunu Aç
          </a>
        </div>
        <ol>
          <li>
            Terminal: <code>cd public/mario-kart</code>
          </li>
          <li>
            Terminal: <code>python3 -m http.server 4173</code>
          </li>
          <li>
            Tarayıcı: <code>http://127.0.0.1:4173</code>
          </li>
        </ol>
      </section>
    </main>
  );
}

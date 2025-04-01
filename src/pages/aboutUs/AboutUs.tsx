import "./aboutUs.scss";

const PETTIIntro = () => {
  return (
    <div className="about-us-container to-top">
      <div className="w-default pb-8">
        <section className="about-us-header">
          <h1 className="font-[ftnB] mb-4">关于 PETTI</h1>
          <p className="">
            欢迎来到 PETTI——一个重新定义现代风格与优雅的时尚品牌。PETTI
            致力于打造高品质、可持续的服饰，让每个人都能自信表达独特的个性。
            我们的系列融合了经典设计与现代潮流，带来舒适与精致并存的时尚体验。
          </p>
        </section>

        <section className="about-us-vision mb-6 mt-[40px]">
          <h2 className="font-semibold mb-2">我们的愿景</h2>
          <p className="">
            在 PETTI，我们相信时尚不仅关乎外在，更应该带来积极的影响。
            我们坚持可持续发展、道德生产，并希望每位顾客都能在 PETTI
            的服饰中找到自信。通过创新设计与环保理念的结合，我们致力于推动
            未来时尚行业的发展，关爱人类与地球。
          </p>
        </section>

        <section className="about-us-features">
          <h2 className="font-semibold mb-4">我们的特色</h2>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">1. 高品质服饰</h3>
            <p className="">
              PETTI 代表着卓越的工艺与细节。我们精选优质面料，确保服饰的舒适性、
              耐用性与完美剪裁。从日常基础款到个性单品，我们的每一件作品都能为
              你的衣橱增添亮点。
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">2. 可持续时尚</h3>
            <p className="">
              可持续发展是 PETTI 的核心理念。我们采用环保面料，减少浪费，并坚持
              负责任的生产方式。选择 PETTI，就是选择更环保的时尚生活方式。
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">3. 经典设计</h3>
            <p className="">
              PETTI 的设计灵感源自经典美学，确保每一件服饰都能经得起时间的考验。
              无论是经典风衣、修身西装，还是优雅连衣裙，我们的系列始终保持时尚
              与实用的完美平衡。
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">4. 包容性尺码</h3>
            <p className="">
              PETTI 认为时尚应该属于每个人，因此我们提供多种尺码选择，让不同身形
              的顾客都能找到合适的款式。我们提倡多元化和身体自信，让每个人都能
              享受穿搭的乐趣。
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">5. 社区与合作</h3>
            <p className="">
              PETTI 不仅仅是一个品牌，更是一个社区。我们与艺术家、设计师和
              KOL 合作，为系列注入新鲜创意。通过这些合作，我们希望激发更多的
              灵感，打造一个充满活力的时尚社群。
            </p>
          </div>
        </section>

        <section className="about-us-community mt-8">
          <h2 className="font-semibold mb-2">加入 PETTI 社区</h2>
          <p className="">
            PETTI 不只是服饰，更是一种生活态度。无论你是潮流先锋、极简主义者，
            还是热爱可持续时尚的人，在 PETTI 你都能找到属于自己的风格。
          </p>
          <p className="mt-4">
            让我们携手，共同打造一个风格与责任并存的世界，让时尚成为
            一种积极的力量。欢迎加入 PETTI——在这里，优雅与可持续同行。
          </p>
        </section>
      </div>
    </div>
  );
};

export default PETTIIntro;

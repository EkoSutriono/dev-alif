<template>
  <div class="bg-black">
    <Hero />
    <About />
    <CourseContent />
    <Highlights />
    <Pricing />
    <FAQ />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Masterclass AI - Alif Ma'luf",
        description: "Kuasai teknik produksi video iklan profesional dengan teknologi AI.",
        provider: {
          "@type": "Person",
          name: "Alif Ma'luf",
          sameAs: "https://masterclass.alifmaluf.com/",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: "PT10H",
        },
        offers: {
          "@type": "Offer",
          category: "Paid",
          priceCurrency: "IDR",
          price: "497000",
          availability: "https://schema.org/InStock",
          url: "https://masterclass.alifmaluf.com/#pricing",
        },
      }),
    },
  ],
});
</script>

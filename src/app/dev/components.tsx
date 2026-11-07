import {
  BrandChip,
  Button,
  Field,
  ListRow,
  NewsCard,
  ProgressSegments,
  RadioList,
  ReportCard,
  Screen,
  SearchField,
  SelectField,
  ServiceRow,
  StatusPill,
  TabBar,
  Text,
  TextAreaField,
  Toggle,
} from "@/components/ui";
import {
  REPORT_STATUSES,
  complaintCategories,
  getCategory,
  news,
  reports,
  services,
  type ComplaintCategoryId,
} from "@/mocks";
import { colors } from "@/theme/tokens";
import { Image } from "expo-image";
import { FileCheck, Recycle, Trees } from "lucide-react-native";
import { useState, type ReactNode } from "react";
import { ScrollView, View } from "react-native";

export default function ComponentPreview() {
  const [category, setCategory] =
    useState<ComplaintCategoryId>("garbage-disposal");
  const [description, setDescription] = useState("");
  const [push, setPush] = useState(true);

  return (
    <Screen edges={["top"]}>
      <ScrollView contentContainerClassName="gap-10 py-8 pb-40">
        <Text
          accessibilityRole="header"
          className="px-6 font-bold text-statement"
        >
          Components
        </Text>

        <Section title="Buttons">
          <Button>Log in</Button>
          <Button kind="secondary">Continue with Google</Button>
          <Button kind="quiet">Skip for now</Button>
          <View className="gap-3 rounded-tile bg-navy-deep p-4">
            <Button surface="navy">Get started</Button>
            <Button surface="navy" kind="secondary">
              Log in
            </Button>
          </View>
        </Section>

        <Section title="Fields">
          <Field
            label="Email"
            keyboardType="email-address"
            defaultValue="elijahbes@gmail.com"
          />
          <Field
            label="Password"
            passwordToggle
            defaultValue="wrongpass"
            error="That email and password don't match. Check both and try again."
          />
          <SelectField
            label="Complaint category"
            value={getCategory(category)?.label}
            onPress={() => {}}
          />
          <TextAreaField
            label="Describe the issue"
            maxLength={2000}
            value={description}
            onChangeText={setDescription}
          />
          <SearchField label="Search your reports" />
        </Section>

        <Section title="Status and progress">
          <View className="flex-row flex-wrap gap-2">
            {REPORT_STATUSES.map((s) => (
              <StatusPill key={s} status={s} />
            ))}
          </View>
          <ProgressSegments total={4} done={2} label="Step 2 of 4" />
        </Section>

        <Section title="Brand chip">
          <View className="h-28 justify-center overflow-hidden rounded-tile px-3">
            <Image
              source={news[0].photo}
              contentFit="cover"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            />
            <BrandChip surface="photo" />
          </View>
          <BrandChip />
          <View className="rounded-tile bg-navy-deep p-3">
            <BrandChip surface="navy" />
          </View>
        </Section>

        <Section title="Your other reports" padded={false}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-3 px-6"
          >
            {reports.map((r) => (
              <ReportCard key={r.id} report={r} />
            ))}
          </ScrollView>
        </Section>

        <Section title="From MCENRO" padded={false}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-3 px-6"
          >
            {news.map((s) => (
              <NewsCard key={s.id} story={s} />
            ))}
          </ScrollView>
        </Section>

        <View className="gap-2 bg-subtle px-6 pb-6 pt-9">
          <Text accessibilityRole="header" className="font-bold text-title">
            MCENRO services
          </Text>
          <View>
            <ServiceRow
              service={services[0]}
              tint="gold"
              icon={<Recycle size={22} color={colors.navy} />}
            />
            <ServiceRow
              service={services[1]}
              tint="sand"
              divider
              icon={<Trees size={22} color={colors.navy} />}
            />
            <ServiceRow
              service={services[2]}
              tint="blue"
              divider
              icon={<FileCheck size={22} color={colors.navy} />}
            />
          </View>
        </View>

        <Section title="Rows and controls">
          <View className="rounded-tile bg-subtle px-4">
            <ListRow href="/" label="Personal information" />
            <ListRow href="/" label="FAQs" detail="Answers from MCENRO" />
          </View>
          <View className="rounded-tile bg-subtle px-4">
            <Toggle
              label="Push notifications"
              checked={push}
              onChange={setPush}
            />
          </View>
          <RadioList
            label="Complaint category"
            value={category}
            onChange={(v) => setCategory(v as ComplaintCategoryId)}
            options={complaintCategories.map((c) => ({
              value: c.id,
              label: c.label,
              detail: c.detail,
            }))}
          />
        </Section>
      </ScrollView>
      <TabBar />
    </Screen>
  );
}

function Section({
  title,
  padded = true,
  children,
}: {
  title: string;
  padded?: boolean;
  children: ReactNode;
}) {
  return (
    <View className="gap-4">
      <Text accessibilityRole="header" className="px-6 font-bold text-title">
        {title}
      </Text>
      <View className={padded ? "gap-3 px-6" : undefined}>{children}</View>
    </View>
  );
}

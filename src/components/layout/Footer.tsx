export default function Footer() {
  return (
    <footer
      className="flex items-center justify-center h-9 flex-shrink-0 text-xs border-t"
      style={{ color: '#C0C0C0', borderColor: '#ECEDF0', backgroundColor: '#FAFBFC' }}
    >
      西卡（中国）有限公司 &copy; {new Date().getFullYear()} &mdash; 本方案由西卡墅造系统提供参考
    </footer>
  );
}

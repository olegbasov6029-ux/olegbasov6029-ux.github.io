import React from 'react';
import { 
  Layout, 
  Row, 
  Col, 
  Card, 
  Table, 
  Form, 
  Input, 
  Button, 
  Select, 
  DatePicker, 
  Radio, 
  Checkbox,
  Space,
  Typography,
  Avatar,
  Menu,
  Grid
} from 'antd';
import { 
  UserOutlined, 
  PhoneOutlined, 
  MailOutlined, 
  CalendarOutlined,
  CodeOutlined 
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { useBreakpoint } = Grid;

const PersonalWebsite = () => {
  const screens = useBreakpoint();
  const [form] = Form.useForm();

  const tableColumns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      width: 60,
    },
    {
      title: 'Тип ссылки',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Пример',
      dataIndex: 'example',
      key: 'example',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const tableData = [
    {
      key: '1',
      id: '1',
      type: 'Абсолютная',
      description: 'Ссылка на внешний ресурс',
      example: 'Основной тип',
      status: 'Основной тип',
      rowSpan: [2, 1],
    },
    {
      key: '2',
      id: '2',
      type: 'Относительная',
      description: 'Ссылка внутри сайта',
      example: '/page.html',
      status: 'Внутренние',
      rowSpan: [1, 2],
    },
    {
      key: '3',
      id: '3',
      type: 'Сокращенная',
      description: 'Короткий путь',
      example: '/internal',
      status: 'Внутренние',
    },
    {
      key: '4',
      id: '4',
      type: 'Специальные типы ссылок',
      description: 'Специальные типы ссылок',
      example: 'Специальные типы ссылок',
      status: 'Особые',
      colSpan: [3, 1],
    },
    {
      key: '5',
      id: '5',
      type: 'С параметрами',
      description: 'URL с параметрами',
      example: '?id=123',
      status: 'Динамическая',
    },
    {
      key: '6',
      id: '6',
      type: 'Изображение',
      description: 'Картинка-ссылка',
      example: '<img> в <a>',
      status: 'Графическая',
    },
  ];

  const links = [
    { href: 'http://kubsu.ru', text: 'Абсолютная гиперссылка на главную страницу сайта kubsu.ru' },
    { href: 'https://kubsu.ru', text: 'Абсолютная на главную сайта kubsu.ru в протоколе https' },
    { href: 'https://kubsu.ru', text: 'Ссылка-изображение', isImage: true },
    { href: '/internal-page', text: 'Сокращенная ссылка на внутреннюю страницу' },
    { href: '/', text: 'Сокращенная ссылка на главную страницу' },
    { href: '#fragment', text: 'Ссылка на фрагмент текущей страницы' },
    { href: 'https://example.com/page?param1=value1&param2=value2&param3=value3', text: 'Ссылка с тремя параметрами в URL' },
    { href: 'https://example.com/page?id=123', text: 'Ссылка с параметром id в URL' },
    { href: 'current-page.html', text: 'Относительная на страницу в текущем каталоге' },
    { href: 'about/page.html', text: 'Относительная на страницу в каталоге about' },
    { href: '../page.html', text: 'Относительная на страницу в каталоге уровнем выше текущего' },
    { href: '../../page.html', text: 'Относительная на страницу в каталоге двумя уровнями выше' },
    { text: 'Это контекстная ссылка в тексте абзаца', isContextual: true },
    { href: 'https://example.com/page#section', text: 'Ссылка на фрагмент страницы стороннего сайта' },
    { text: 'Изображение-карта', isImageMap: true },
    { href: '', text: 'Ссылка с пустым href' },
    { text: 'Ссылка без href', noHref: true },
    { href: 'https://example.com', rel: 'nofollow', text: 'Ссылка, по которой запрещен переход поисковикам' },
    { href: 'https://example.com', rel: 'noindex', text: 'Запрещенная для индексации поисковиками' },
    { href: 'https://example.com/1', title: 'Подпись к первой ссылке', text: 'Ссылка 1' },
    { href: 'https://example.com/2', title: 'Подпись ко второй ссылке', text: 'Ссылка 2' },
    { href: 'https://example.com/3', title: 'Подпись к третьей ссылке', text: 'Ссылка 3' },
    { href: 'ftp://user:password@ftp.example.com/file.txt', text: 'Ссылка на файл на сервере FTP с авторизацией' },
  ];

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const menuItems = [
    { key: 'links', label: 'Меню' },
    { key: 'table', label: 'Главное' },
    { key: 'form', label: 'Дополнительное' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#2c3e50', padding: screens.xs ? '10px 0' : '15px 0' }}>
  <div className="container">
    <Row justify="center">
      <Col>
        <Avatar size={screens.xs ? 100 : 150} src="/DSC0072.jpg" />
      </Col>
    </Row>
  </div>
</div>

      {/* Navigation */}
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width={200}
          style={{
            background: '#34495e',
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['table']}
            items={menuItems}
            style={{ background: '#34495e' }}
          />
        </Sider>

        <Layout>
          <Content style={{ padding: screens.xs ? '10px' : '24px' }}>
            <div className="container">
              {/* Site Title */}
              <Row justify="center" style={{ marginBottom: 24 }}>
                <Col xs={24} sm={20} md={16}>
                  <Card 
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      textAlign: 'center',
                      border: 'none',
                    }}
                    bodyStyle={{ padding: screens.xs ? '16px' : '24px' }}
                  >
                    <Title 
                      level={screens.xs ? 3 : 1} 
                      style={{ color: 'white', margin: 0 }}
                    >
                      Мой сайт
                    </Title>
                  </Card>
                </Col>
              </Row>

              {/* Main Content */}
              <Row gutter={[16, 16]}>
                {/* Таблица */}
                <Col xs={24} lg={12}>
                  <Card 
                    id="table"
                    title={<Title level={3}>Таблица</Title>}
                    style={{ marginBottom: 16 }}
                  >
                    <Table
                      columns={tableColumns}
                      dataSource={tableData}
                      pagination={false}
                      scroll={{ x: true }}
                      size={screens.xs ? 'small' : 'middle'}
                    />
                  </Card>
                </Col>

                {/* Ссылки */}
                <Col xs={24} lg={12}>
                  <Card 
                    id="links"
                    title={<Title level={3}>Маркированный список гиперссылок</Title>}
                    style={{ marginBottom: 16 }}
                  >
                    <Space direction="vertical" style={{ width: '100%' }} size="middle">
                      {links.map((link, index) => (
                        <Card 
                          key={index}
                          size="small"
                          style={{ 
                            backgroundColor: '#f8f9fa',
                            borderLeft: '4px solid #3498db',
                          }}
                          bodyStyle={{ padding: '12px' }}
                        >
                          {link.isContextual ? (
                            <Paragraph>
                              Это <a href="https://example.com">контекстная ссылка</a> в тексте абзаца
                            </Paragraph>
                          ) : link.isImage ? (
                            <a href={link.href}>
                              <Avatar 
                                size={screens.xs ? 100 : 200} 
                                src="Логотип_КубГУ.png"
                                shape="square"
                              />
                            </a>
                          ) : link.isImageMap ? (
                            <div>
                              <img 
                                src="square_and_circle.jpeg" 
                                alt="Image map" 
                                style={{ 
                                  width: '100%', 
                                  maxWidth: 550,
                                  height: 'auto',
                                  maxHeight: 200 
                                }}
                                useMap="#image-map"
                              />
                              <map name="image-map">
                                <area shape="rect" coords="50,50,250,150" href="https://example.com/rect" alt="Прямоугольная область" />
                                <area shape="circle" coords="400,100,40" href="https://example.com/circle" alt="Круглая область" />
                              </map>
                            </div>
                          ) : link.noHref ? (
                            <Text>{link.text}</Text>
                          ) : (
                            <a 
                              href={link.href} 
                              rel={link.rel}
                              title={link.title}
                              style={{ wordBreak: 'break-word' }}
                            >
                              {link.text}
                            </a>
                          )}
                        </Card>
                      ))}
                    </Space>

                    {/* Фрагмент */}
                    <div id="fragment" style={{ marginTop: 24 }}>
                      <Card 
                        style={{
                          backgroundColor: '#e8f4f8',
                          borderLeft: '4px solid #3498db',
                        }}
                      >
                        <Title level={4}>Фрагмент страницы</Title>
                        <Paragraph>
                          Это фрагмент, на который ведет ссылка из списка.
                        </Paragraph>
                      </Card>
                    </div>
                  </Card>
                </Col>

                {/* Форма */}
                <Col xs={24}>
                  <Card 
                    id="form"
                    title={<Title level={3}>Форма</Title>}
                  >
                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={onFinish}
                      size={screens.xs ? 'small' : 'middle'}
                    >
                      <Row gutter={16}>
                        <Col xs={24} md={12}>
                          <Form.Item
                            label="ФИО"
                            name="fio"
                            rules={[{ required: true, message: 'Пожалуйста, введите ФИО' }]}
                          >
                            <Input 
                              prefix={<UserOutlined />} 
                              placeholder="Введите ваше ФИО" 
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                          <Form.Item
                            label="Телефон"
                            name="phone"
                            rules={[{ required: true, message: 'Пожалуйста, введите телефон' }]}
                          >
                            <Input 
                              prefix={<PhoneOutlined />} 
                              placeholder="Введите ваш телефон" 
                            />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row gutter={16}>
                        <Col xs={24} md={12}>
                          <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[
                              { required: true, message: 'Пожалуйста, введите email' },
                              { type: 'email', message: 'Пожалуйста, введите корректный email' }
                            ]}
                          >
                            <Input 
                              prefix={<MailOutlined />} 
                              placeholder="Введите ваш email" 
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                          <Form.Item
                            label="Дата рождения"
                            name="birthdate"
                            rules={[{ required: true, message: 'Пожалуйста, выберите дату рождения' }]}
                          >
                            <DatePicker 
                              style={{ width: '100%' }}
                              placeholder="Выберите дату"
                              suffixIcon={<CalendarOutlined />}
                            />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Form.Item
                        label="Пол"
                        name="gender"
                        rules={[{ required: true, message: 'Пожалуйста, выберите пол' }]}
                      >
                        <Radio.Group>
                          <Radio value="male">Мужской</Radio>
                          <Radio value="female">Женский</Radio>
                        </Radio.Group>
                      </Form.Item>

                      <Form.Item
                        label="Любимый язык программирования"
                        name="languages"
                      >
                        <Select
                          mode="multiple"
                          placeholder="Выберите языки программирования"
                          suffixIcon={<CodeOutlined />}
                          size={screens.xs ? 'small' : 'middle'}
                        >
                          <Option value="pascal">Pascal</Option>
                          <Option value="c">C</Option>
                          <Option value="cpp">C++</Option>
                          <Option value="javascript">JavaScript</Option>
                          <Option value="php">PHP</Option>
                          <Option value="python">Python</Option>
                          <Option value="java">Java</Option>
                          <Option value="haskel">Haskel</Option>
                          <Option value="clojure">Clojure</Option>
                          <Option value="prolog">Prolog</Option>
                          <Option value="scala">Scala</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        label="Биография"
                        name="bio"
                      >
                        <Input.TextArea 
                          rows={4} 
                          placeholder="Расскажите о себе" 
                        />
                      </Form.Item>

                      <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[{ required: true, message: 'Необходимо согласие с контрактом' }]}
                      >
                        <Checkbox>
                          С контрактом ознакомлен(а)
                        </Checkbox>
                      </Form.Item>

                      <Form.Item>
                        <Button 
                          type="primary" 
                          htmlType="submit" 
                          size="large"
                          style={{
                            background: 'linear-gradient(135deg, #27ae60 0%, #219a52 100%)',
                            border: 'none',
                            borderRadius: '25px',
                            width: screens.xs ? '100%' : 'auto',
                            padding: '0 30px',
                          }}
                        >
                          Сохранить
                        </Button>
                      </Form.Item>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>

      {/* Footer */}
      <Footer style={{ 
        textAlign: 'center', 
        backgroundColor: '#2c3e50',
        color: 'white',
        marginTop: 'auto'
      }}>
        <Text style={{ color: 'white' }}>&copy; Олег Басов</Text>
      </Footer>
    </Layout>
  );
};

const containerStyle = {
  width: '100%',
  padding: '0 15px',
  margin: '0 auto',
};

const Container = ({ children, style, ...props }) => (
  <div style={{ ...containerStyle, ...style }} {...props}>
    {children}
  </div>
);

export default PersonalWebsite;
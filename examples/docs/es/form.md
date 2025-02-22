## Form

Form consiste en `input`, `radio`, `select`, `checkbox`, etcétera. Con el formulario, usted puede recopilar, verificar y enviar datos.

### Form básico

Incluye todo tipo de entradas, tales como `input`, `select`, `radio` y `checkbox`.

:::demo En cada componente `form`, necesita un campo `form-item` para que sea el contenedor del ítem.

```html
<sg-form ref="form" :model="form" label-width="120px">
  <sg-form-item label="Activity name">
    <sg-input v-model="form.name"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone">
    <sg-select v-model="form.region" placeholder="please select your zone">
      <sg-option label="Zone one" value="shanghai"></sg-option>
      <sg-option label="Zone two" value="beijing"></sg-option>
    </sg-select>
  </sg-form-item>
  <sg-form-item label="Activity time">
    <sg-col :span="11">
      <sg-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></sg-date-picker>
    </sg-col>
    <sg-col class="line" :span="2">-</sg-col>
    <sg-col :span="11">
      <sg-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></sg-time-picker>
    </sg-col>
  </sg-form-item>
  <sg-form-item label="Instant delivery">
    <sg-switch v-model="form.delivery"></sg-switch>
  </sg-form-item>
  <sg-form-item label="Activity type">
    <sg-checkbox-group v-model="form.type">
      <sg-checkbox label="Online activities" name="type"></sg-checkbox>
      <sg-checkbox label="Promotion activities" name="type"></sg-checkbox>
      <sg-checkbox label="Offline activities" name="type"></sg-checkbox>
      <sg-checkbox label="Simple brand exposure" name="type"></sg-checkbox>
    </sg-checkbox-group>
  </sg-form-item>
  <sg-form-item label="Resources">
    <sg-radio-group v-model="form.resource">
      <sg-radio label="Sponsor"></sg-radio>
      <sg-radio label="Venue"></sg-radio>
    </sg-radio-group>
  </sg-form-item>
  <sg-form-item label="Activity form">
    <sg-input type="textarea" v-model="form.desc"></sg-input>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="onSubmit">Create</sg-button>
    <sg-button>Cancel</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```

:::

:::tip
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) reglamenta que

> <i>Cuando sólo hay un campo de entrada de texto de una sola línea en un formulario, el agente usuario debe aceptar <b>Enter</b> en ese campo como una solicitud para enviar el formulario.</i>

Para prevenir este comportamiento, puede agregar `@submit.native.prevent` on `<sg-form>`.
:::

### Formulario inline

Cuando el espacio vertical es limitado y la forma es relativamente simple, puede ponerlo en una unica línea.

:::demo Establezca el atributo `inline` como `true` y el formulario sera inline.

```html
<sg-form :inline="true" :model="formInline" class="demo-form-inline">
  <sg-form-item label="Approved by">
    <sg-input v-model="formInline.user" placeholder="Approved by"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone">
    <sg-select v-model="formInline.region" placeholder="Activity zone">
      <sg-option label="Zone one" value="shanghai"></sg-option>
      <sg-option label="Zone two" value="beijing"></sg-option>
    </sg-select>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="onSubmit">Query</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```

:::

### Alineamiento

Dependiendo de su diseño, hay varias maneras diferentes de alinear el elemento de la etiqueta.

:::demo El atributo `label-position` decide cómo se alinean las etiquetas, puede estar `top` o `left`. Cuando se establece en `top`, las etiquetas se colocarán en la parte superior del campo de formulario.

```html
<sg-radio-group v-model="labelPosition" size="small">
  <sg-radio-button label="left">Left</sg-radio-button>
  <sg-radio-button label="right">Right</sg-radio-button>
  <sg-radio-button label="top">Top</sg-radio-button>
</sg-radio-group>
<div style="margin: 20px;"></div>
<sg-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
  <sg-form-item label="Name">
    <sg-input v-model="formLabelAlign.name"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone">
    <sg-input v-model="formLabelAlign.region"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity form">
    <sg-input v-model="formLabelAlign.type"></sg-input>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>
```

:::

### Validación

El componente `form` le permite verificar sus datos, ayudándole a encontrar y corregir errores.

:::demo Sólo tiene que añadir el atributo `rules` en el componente `Form`, pasar las reglas de validación y establecer el atributo `prop` para `Form-Item` como una clave específica que necesita ser validada. Ver más información en [async-validator](https://github.com/yiminghe/async-validator).

```html
<sg-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <sg-form-item label="Activity name" prop="name">
    <sg-input v-model="ruleForm.name"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone" prop="region">
    <sg-select v-model="ruleForm.region" placeholder="Activity zone">
      <sg-option label="Zone one" value="shanghai"></sg-option>
      <sg-option label="Zone two" value="beijing"></sg-option>
    </sg-select>
  </sg-form-item>
  <sg-form-item label="Activity time" required>
    <sg-col :span="11">
      <sg-form-item prop="date1">
        <sg-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></sg-date-picker>
      </sg-form-item>
    </sg-col>
    <sg-col class="line" :span="2">-</sg-col>
    <sg-col :span="11">
      <sg-form-item prop="date2">
        <sg-time-picker placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></sg-time-picker>
      </sg-form-item>
    </sg-col>
  </sg-form-item>
  <sg-form-item label="Instant delivery" prop="delivery">
    <sg-switch v-model="ruleForm.delivery"></sg-switch>
  </sg-form-item>
  <sg-form-item label="Activity type" prop="type">
    <sg-checkbox-group v-model="ruleForm.type">
      <sg-checkbox label="Online activities" name="type"></sg-checkbox>
      <sg-checkbox label="Promotion activities" name="type"></sg-checkbox>
      <sg-checkbox label="Offline activities" name="type"></sg-checkbox>
      <sg-checkbox label="Simple brand exposure" name="type"></sg-checkbox>
    </sg-checkbox-group>
  </sg-form-item>
  <sg-form-item label="Resources" prop="resource">
    <sg-radio-group v-model="ruleForm.resource">
      <sg-radio label="Sponsorship"></sg-radio>
      <sg-radio label="Venue"></sg-radio>
    </sg-radio-group>
  </sg-form-item>
  <sg-form-item label="Activity form" prop="desc">
    <sg-input type="textarea" v-model="ruleForm.desc"></sg-input>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="submitForm('ruleForm')">Create</sg-button>
    <sg-button @click="resetForm('ruleForm')">Reset</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```

:::

### Reglas personalizadas de validación

Este ejemplo muestra cómo personalizar sus propias reglas de validación para finalizar una verificación de contraseña de dos pasos.

:::demo Aquí utilizamos el `status-icon` para reflejar el resultado de la validación como un icono.

```html
<sg-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <sg-form-item label="Password" prop="pass">
    <sg-input type="password" v-model="ruleForm.pass" autocomplete="off"></sg-input>
  </sg-form-item>
  <sg-form-item label="Confirm" prop="checkPass">
    <sg-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></sg-input>
  </sg-form-item>
  <sg-form-item label="Age" prop="age">
    <sg-input v-model.number="ruleForm.age"></sg-input>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="submitForm('ruleForm')">Submit</sg-button>
    <sg-button @click="resetForm('ruleForm')">Reset</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```

:::

:::tip
Se debe llamar a la función de validación de llamada de retorno personalizada. Ver uso más avanzado en [async-validator](https://github.com/yiminghe/async-validator).
:::

### Eliminar o agregar validaciones dinámicamente

:::demo Además de pasar todas las reglas de validación al mismo tiempo en el componente `form`, también puede pasar las reglas de validación o borrar reglas en un único campo de formulario de forma dinámica.

```html
<sg-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <sg-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <sg-input v-model="dynamicValidateForm.email"></sg-input>
  </sg-form-item>
  <sg-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }"
  >
    <sg-input v-model="domain.value"></sg-input><sg-button @click.prevent="removeDomain(domain)">Delete</sg-button>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</sg-button>
    <sg-button @click="addDomain">New domain</sg-button>
    <sg-button @click="resetForm('dynamicValidateForm')">Reset</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        });
      }
    }
  }
</script>
```

:::

### Validación numérica

:::demo La validación numérica necesita un modificador `.number` añadido en el enlace `v-model` de entrada, sirve para transformar el valor de la cadena al número proporcionado por Vuejs.

```html
<sg-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <sg-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <sg-input v-model.number="numberValidateForm.age" autocomplete="off"></sg-input>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="submitForm('numberValidateForm')">Submit</sg-button>
    <sg-button @click="resetForm('numberValidateForm')">Reset</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```

:::

:::tip

Cuando un `sg-form-item` está anidado en otro `sg-form-item`, su ancho de etiqueta será 0. Si es necesario, puede establecer el ancho de etiqueta en ese `sg-form-item`.

:::

### Tamaño del control

Todos los componentes de un formulario heredan su atributo `size`. De manera similar, FormItem también tiene un atributo `size`.

:::demo Aún así, puede ajustar el `size` de cada componente si no desea que herede su tamaño de From o FormItem.

```html
<sg-form ref="form" :model="sizeForm" label-width="120px" size="mini">
  <sg-form-item label="Activity name">
    <sg-input v-model="sizeForm.name"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone">
    <sg-select v-model="sizeForm.region" placeholder="please select your zone">
      <sg-option label="Zone one" value="shanghai"></sg-option>
      <sg-option label="Zone two" value="beijing"></sg-option>
    </sg-select>
  </sg-form-item>
  <sg-form-item label="Activity time">
    <sg-col :span="11">
      <sg-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></sg-date-picker>
    </sg-col>
    <sg-col class="line" :span="2">-</sg-col>
    <sg-col :span="11">
      <sg-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></sg-time-picker>
    </sg-col>
  </sg-form-item>
  <sg-form-item label="Activity type">
    <sg-checkbox-group v-model="sizeForm.type">
      <sg-checkbox-button label="Online activities" name="type"></sg-checkbox-button>
      <sg-checkbox-button label="Promotion activities" name="type"></sg-checkbox-button>
    </sg-checkbox-group>
  </sg-form-item>
  <sg-form-item label="Resources">
    <sg-radio-group v-model="sizeForm.resource" size="medium">
      <sg-radio border label="Sponsor"></sg-radio>
      <sg-radio border label="Venue"></sg-radio>
    </sg-radio-group>
  </sg-form-item>
  <sg-form-item size="large">
    <sg-button type="primary" @click="onSubmit">Create</sg-button>
    <sg-button>Cancel</sg-button>
  </sg-form-item>
</sg-form>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
```

:::

### Form Atributos

| Atributo                | Descripción                              | Tipo    | Valores aceptados     | Por defecto |
| ----------------------- | ---------------------------------------- | ------- | --------------------- | ----------- |
| model                   | Datos del componente                     | object  | —                     | —           |
| rules                   | Reglas de validación                     | object  | —                     | —           |
| inline                  | Si el form es inline                     | boolean | —                     | false       |
| label-position          | Posición de la etiqueta          | string  | left / right / top    | right       |
| label-width             | anchura de la etiqueta, por ejemplo, "50px". Todos sus elementos de formulario hijo directo heredarán este valor. El valor `auto` está soportado. | string | — | — |
| label-suffix            | sufijo de la etiqueta                    | string  | —                     | —           |
| hide-required-asterisk       | si los campos obligatorios deben tener un asterisco rojo (estrella) al lado de sus etiquetas | boolean | — | false |
| show-message            | si mostrar o no el mensaje de error      | boolean | —                     | true        |
| inline-message          | si desea visualizar el mensaje de error inline con la posición del form item | boolean | —                     | false       |
| status-icon             | si desea visualizar un icono que indique el resultado de la validación | boolean | —                     | false       |
| validate-on-rule-change | si se dispara la validación cuando el prop `rules` cambia | boolean | —                     | true        |
| size                    | el tamaño de los componentes en este form | string  | medium / small / mini | —           |
| disabled                | si se desactivan todos los componentes del formulario. Si esta en `true` no puede ser cambiado por el prop `disabled` individual de los componentes. | boolean | —                     | false       |

### Form Métodos

| Método        | Descripción                                                  | Parámetros                                                   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| validate      | el método para validar todo el formulario. Recibe una llamada como parámetro. Después de la validación, la llamada de retorno se ejecutará con dos parámetros: un booleano que indica si la validación ha pasado, y un objeto que contiene todos los campos que fallaron en la validación. Devuelve una promesa si se omite el return | Function(callback: Function(boolean, object))                |
| validateField | validar uno o varios elementos de formulario                 | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | restablece todos los campos y elimina el resultado de validación | —                                                            |
| clearValidate | borra el mensaje de validación para determinados campos. El parámetro es un prop name o un array de props names de los items del formulario cuyos mensajes de validación se eliminarán. Si se omiten, se borrarán todos los mensajes de validación de los campos. | Function(props: string \| array)                             |


### Eventos Form

| Nombre   | Descripción                                          | Parámetros                                                   |
| -------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| validate | se dispara después de validar un ítem del formulario | la propiedad (`prop name`) nombre del ítem del form que se esta validando, si la validación paso o no, y el mensaje de error si existe. |

### Form-Item Atributos

| Atributo       | Descripción                                                  | Tipo    | Valores aceptados                           | Por defecto |
| -------------- | ------------------------------------------------------------ | ------- | ------------------------------------------- | ----------- |
| prop           | un clave del modelo. En el uso del método `validate` y `resetFields`, el atributo es obligatorio. | string  | Clave del modelo que se ha pasado a  `form` |             |
| label          | etiqueta                                                     | string  | —                                           | —           |
| label-width    | ancho de la etiqueta, Ejemplo: '50px'. El valor `auto` esta soportado | string  | —                                           | —           |
| required       | si el campo es obligatorio o no, estará determinado por las reglas de validación si se omite. | boolean | —                                           | false       |
| rules          | reglas de validación del form                                | object  | —                                           | —           |
| error          | mensaje de error de campo, establezca su valor y el campo validará el error y mostrará este mensaje inmediatamente. | string  | —                                           | —           |
| show-message   | si mostrar o no el mensaje de error                          | boolean | —                                           | true        |
| inline-message | mensaje de validación estilo inline                          | boolean | —                                           | false       |
| size           | Tamaño de los componentes en este form item                  | string  | medium / small / mini                       | -           |

### Form-Item Slot

| Nombre | Descripción              |
| ------ | ------------------------ |
| —      | contenido del Form Item  |
| label  | contenido de la etiqueta |

### Form-Item Scoped Slot

| Name  | Description                                                  |
| ----- | ------------------------------------------------------------ |
| error | Contenido personalizado para mostrar el mensaje de validación. El parámetro del scope es { error } |

### Form-Item Método

| Método        | Descripción                                                 | Parámetros |
| ------------- | ----------------------------------------------------------- | ---------- |
| resetField    | restablecer campo actual y eliminar resultado de validación | —          |
| clearValidate | elimina el estado de la validación de un campo              | -          |
